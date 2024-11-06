
# Set-ExecutionPolicy RemoteSigned 
# Set-ExecutionPolicy Unrestricted
# .\github_upload.ps1 -Repo "user/repo" -Tag "v1" -Token "gh_token" -AssetName "test.zip" -FilePath "test.zip"

param(
    [string]$Repo = "user/repo",
    [string]$Tag = "v1",
    [string]$Token = "gh_token",
    [string]$AssetName = "test.zip",
    [string]$FilePath = "test.zip"
)

# Step 1: Get the Release ID
$ReleaseUrl = "https://api.github.com/repos/$Repo/releases/tags/$Tag"
$ReleaseResponse = Invoke-RestMethod -Uri $ReleaseUrl -Headers @{ "Authorization" = "token $Token"; "Accept" = "application/vnd.github+json" } -Method Get

if (-not $ReleaseResponse.id) {
    Write-Host "Error: Release $Tag not found."
    exit 1
}

$ReleaseId = $ReleaseResponse.id

# Step 2: List existing assets
$AssetsUrl = "https://api.github.com/repos/$Repo/releases/$ReleaseId/assets"
$Assets = Invoke-RestMethod -Uri $AssetsUrl -Headers @{ "Authorization" = "token $Token" } -Method Get

# Step 3: Check if the asset exists and delete it
$AssetExists = $false
foreach ($Asset in $Assets) {
    if ($Asset.name -eq $AssetName) {
        $AssetId = $Asset.id
        $DeleteUrl = "https://api.github.com/repos/$Repo/releases/assets/$AssetId"
        Invoke-RestMethod -Uri $DeleteUrl -Headers @{ "Authorization" = "token $Token" } -Method Delete
        if ($?) {
            Write-Host "Existing asset $AssetName deleted."
        } else {
            Write-Host "Error: Failed to delete existing asset $AssetName."
            exit 1
        }
        $AssetExists = $true
        break
    }
}

# Step 4: Upload the new asset
$UploadUrl = "https://uploads.github.com/repos/$Repo/releases/$ReleaseId/assets?name=$AssetName"
$FileStream = [System.IO.File]::OpenRead($FilePath)
$ContentType = "application/octet-stream"

try {
    $Response = Invoke-RestMethod -Uri $UploadUrl -Headers @{ "Authorization" = "token $Token"; "Content-Type" = $ContentType } -Method Post -Body $FileStream
    Write-Host "Asset $AssetName uploaded successfully."
} catch {
    Write-Host "Error uploading asset $AssetName."
} finally {
    $FileStream.Close()
}
