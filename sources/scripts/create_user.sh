#!/bin/bash

# 定义用户名和密码
USERNAME="$1"
PASSWORD="$2"

# 创建用户
useradd -m -s /bin/bash $USERNAME

# 设置用户密码
echo "$USERNAME:$PASSWORD" | chpasswd

# 输出创建用户的信息
echo "用户 $USERNAME 已成功创建，密码为 $PASSWORD"
