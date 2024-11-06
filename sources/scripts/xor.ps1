
# Set-ExecutionPolicy RemoteSigned 
# Set-ExecutionPolicy Unrestricted
# .\xor.ps1 -DataFile "path_to_your_file" -KeyBase64 "your_base64_key"

param (
    [string]$DataFile = "raw.data",
    [string]$KeyBase64 = "55yf55qE5pyJ5pKS5aSn6IuP5omT5aSn6IuP5omT5ZWK5ZWK5ZWKYWE="
)

# 解码 Base64 密钥
$KeyBytes = [System.Convert]::FromBase64String($KeyBase64)

# 检查文件是否存在
if (-Not (Test-Path $DataFile)) {
    Write-Host "文件 $DataFile 不存在！"
    exit 1
}

# 获取文件长度
$KeyLength = $KeyBytes.Length
$RawLength = (Get-Item $DataFile).Length

# 如果密钥的长度大于数据文件的长度，则只读取数据文件的长度
if ($KeyLength -gt $RawLength) {
    $KeyLength = $RawLength
}

Write-Host "key_length: $KeyLength, raw_length: $RawLength"

# 初始化结果数组
$ResultBytes = New-Object byte[] $KeyLength

# 读取文件内容
$FileStream = [System.IO.File]::OpenRead($DataFile)
try {
    # 读取最多 $KeyLength 字节
    $RawBytes = New-Object byte[] $KeyLength
    $BytesRead = $FileStream.Read($RawBytes, 0, $KeyLength)

    # 字节异或运算
    for ($i = 0; $i -lt $BytesRead; $i++) {
        $ResultBytes[$i] = $RawBytes[$i] -bxor $KeyBytes[$i]
        # Write-Host "raw_byte: $($RawBytes[$i]), key_byte: $($KeyBytes[$i]), xor_byte: $($ResultBytes[$i])"
    }
}
finally {
    # 确保文件流被关闭
    $FileStream.Close()
}

# 将结果写回文件的开始部分
$FileStream = [System.IO.File]::Open($DataFile, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Write)
try {
    $FileStream.Write($ResultBytes, 0, $ResultBytes.Length)
}
finally {
    # 确保文件流被关闭
    $FileStream.Close()
}

Write-Host "完成！"
