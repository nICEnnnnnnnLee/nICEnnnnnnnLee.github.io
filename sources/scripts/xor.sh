#!/bin/bash
## Usage： ./xor.sh file_path_to_deal base64_key_str

DATA_FILE="${1:-raw.data}"
KEY_BASE64="${2:-55yf55qE5pyJ5pKS5aSn6IuP5omT5aSn6IuP5omT5ZWK5ZWK5ZWKYWE=}"
KEY_FILE="$DATA_FILE.key.tmp"

base64 -d <<< "$KEY_BASE64" > $KEY_FILE
base64 -d <<< "55yf55qE5pyJ5pKS5aSn6IuP5omT5aSn6IuP5omT5ZWK5ZWK5ZWKYWE=" > temp

# 检查文件是否存在
if [ ! -f $KEY_FILE ] || [ ! -f $DATA_FILE ]; then
  echo "文件 $KEY_FILE 或 $DATA_FILE 不存在！"
  exit 1
fi

# 获取文件长度
key_length=$(wc -c < $KEY_FILE)
raw_length=$(wc -c < $DATA_FILE)

# 如果 $KEY_FILE 的长度大于 $DATA_FILE 的长度，则只读取 $DATA_FILE 的长度
if [ $key_length -gt $raw_length ]; then
  key_length=$raw_length
fi

echo "key_length: $key_length, raw_length: $raw_length"

# 打开文件并读取内容
key_file=$(mktemp)
raw_file=$(mktemp)
result_file=$(mktemp)

dd if=$KEY_FILE of=$key_file bs=1 count=$key_length
dd if=$DATA_FILE of=$raw_file bs=1 count=$key_length

# 初始化结果文件
> $result_file

# 字节异或运算
i=0
while [ $i -lt $key_length ]; do
  raw_byte=$(od -An -tu1 -N1 "$raw_file" | head -n1)  # Get one byte as unsigned decimal
  key_byte=$(od -An -tu1 -N1 "$key_file" | head -n1)   # Get one byte as unsigned decimal
  xor_byte=$((raw_byte ^ key_byte))
  printf "\\$(printf '%03o' "$xor_byte")" >> "$result_file" # Write byte using octal escape
  tail -c +2 "$raw_file" > temp_raw && mv temp_raw "$raw_file" #Efficiently remove the first byte from raw_file
  tail -c +2 "$key_file" > temp_key && mv temp_key "$key_file" #Efficiently remove the first byte from key_file
  # echo "raw_byte: $raw_byte, key_byte: $key_byte, xor_byte: $xor_byte"
  i=$((i + 1))
done

# 将结果写回 $DATA_FILE
dd if=$result_file of=$DATA_FILE bs=1 count=$key_length conv=notrunc

# 清理临时文件
rm -f "$key_file" "$raw_file" "$result_file" "$KEY_FILE"

echo "完成！"
