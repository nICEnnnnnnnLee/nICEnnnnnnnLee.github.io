
# Set-ExecutionPolicy RemoteSigned 
# Set-ExecutionPolicy Unrestricted
# .\gh_down.ps1 -Repo "your/repo" -Tag "v1" -Token "your_github_token" -AssetName "test.zip" -DownloadPath "path_to_download/test.zip"



param(
    [string]$Repo = "user/repo",
    [string]$Tag = "v1",
    [string]$Token = "gh_token",
    [string]$AssetName = "test.zip",
    [string]$DownloadPath = "test.zip"
)

# 强制使用 TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

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

# Step 3: Find the Asset URL
$AssetUrl = $null
foreach ($Asset in $Assets) {
    if ($Asset.name -eq $AssetName) {
        # $AssetUrl = $Asset.browser_download_url
        $AssetId = $Asset.id
        $AssetUrl = "https://api.github.com/repos/$Repo/releases/assets/$AssetId"
        break
    }
}

if (-not $AssetUrl) {
    Write-Host "Error: Asset $AssetName not found."
    exit 1
}

Write-Host "Asset URL: $AssetUrl"

# Step 4: Download the Asset
# Invoke-WebRequest -Uri $AssetUrl -Headers @{ "Authorization" = "Bearer $Token" } -OutFile $DownloadPath
Invoke-RestMethod -Uri $AssetUrl -Headers @{ "Authorization" = "Bearer $Token"; "Accept" = "application/octet-stream" } -OutFile $DownloadPath

if ($?) {
    Write-Host "Asset $AssetName downloaded successfully to $DownloadPath."
} else {
    Write-Host "Error downloading asset $AssetName."
}

