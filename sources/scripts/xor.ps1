
# Set-ExecutionPolicy RemoteSigned 
# Set-ExecutionPolicy Unrestricted
# .\xor.ps1 -DataFile "path_to_your_file" -KeyBase64 "your_base64_key"

param (
    [string]$DataFile = "raw.data",
    [string]$KeyBase64 = "55yf55qE5pyJ5pKS5aSn6IuP5omT5aSn6IuP5omT5ZWK5ZWK5ZWKYWE="
)

# ���� Base64 ��Կ
$KeyBytes = [System.Convert]::FromBase64String($KeyBase64)

# ����ļ��Ƿ����
if (-Not (Test-Path $DataFile)) {
    Write-Host "�ļ� $DataFile �����ڣ�"
    exit 1
}

# ��ȡ�ļ�����
$KeyLength = $KeyBytes.Length
$RawLength = (Get-Item $DataFile).Length

# �����Կ�ĳ��ȴ��������ļ��ĳ��ȣ���ֻ��ȡ�����ļ��ĳ���
if ($KeyLength -gt $RawLength) {
    $KeyLength = $RawLength
}

Write-Host "key_length: $KeyLength, raw_length: $RawLength"

# ��ʼ���������
$ResultBytes = New-Object byte[] $KeyLength

# ��ȡ�ļ�����
$FileStream = [System.IO.File]::OpenRead($DataFile)
try {
    # ��ȡ��� $KeyLength �ֽ�
    $RawBytes = New-Object byte[] $KeyLength
    $BytesRead = $FileStream.Read($RawBytes, 0, $KeyLength)

    # �ֽ��������
    for ($i = 0; $i -lt $BytesRead; $i++) {
        $ResultBytes[$i] = $RawBytes[$i] -bxor $KeyBytes[$i]
        # Write-Host "raw_byte: $($RawBytes[$i]), key_byte: $($KeyBytes[$i]), xor_byte: $($ResultBytes[$i])"
    }
}
finally {
    # ȷ���ļ������ر�
    $FileStream.Close()
}

# �����д���ļ��Ŀ�ʼ����
$FileStream = [System.IO.File]::Open($DataFile, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Write)
try {
    $FileStream.Write($ResultBytes, 0, $ResultBytes.Length)
}
finally {
    # ȷ���ļ������ر�
    $FileStream.Close()
}

Write-Host "��ɣ�"
