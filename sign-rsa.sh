#!/bin/bash
cd $(dirname $0)

# 检查是否传入了参数
if [ -z "$1" ]; then
    echo "根域名采用默认值"
    DOMAIN="test.com"
else
    DOMAIN="$1"
fi

echo "即将生成域名 $DOMAIN 的通配符证书"

CONF_PATH="./$DOMAIN/$DOMAIN.cnf"
# RSA算法
CA_KEY_PATH="ca.key"
SERVER_KEY_PATH="server.key"
# 椭圆加密算法
#CA_KEY_PATH="ca-private.pem"
#SERVER_KEY_PATH="server-private.pem"

RAND_STR="$(head -c 64 /dev/urandom | tr -dc A-Za-z0-9 | head -c 64)"
echo "随机字符串: $RAND_STR"

# 写入配置文件
if [ -f "$CONF_PATH" ]; then
    echo "$CONF_PATH配置文件已存在"
else
    echo "$CONF_PATH配置文件正在生成"
    mkdir $DOMAIN
    cat <<EOF > $CONF_PATH
[ req ]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]

[ v3_req ]
subjectAltName = @alt_names

[alt_names]
DNS.1 = $DOMAIN
DNS.2 = *.$DOMAIN
EOF
    echo "$CONF_PATH配置文件写入完毕"
fi


# 创建CA的私钥
if [ -f "$CA_KEY_PATH" ]; then
    echo "CA的私钥文件已存在"
else
    echo "$CA_KEY_PATH正在生成"
    openssl genrsa -out $CA_KEY_PATH 4096
    # secp384r1, secp521r1
    #openssl ecparam -name secp521r1 -genkey -out $CA_KEY_PATH
    echo "$CA_KEY_PATH写入完毕"
fi


# 创建CA证书 ca.crt ca.pem
if [ -f "ca.pem" ]; then
    echo "CA证书文件已存在"
else
    echo "ca.pem正在生成"
    openssl req -x509 -new -nodes -key $CA_KEY_PATH -days 3650 -out ca.pem -subj "/CN=CA-$RAND_STR"
    echo "ca.pem写入完毕"
fi

# 创建服务器的私钥
if [ -f "$SERVER_KEY_PATH" ]; then
    echo "服务器的私钥文件已存在"
else
    echo "$SERVER_KEY_PATH正在生成"
    openssl genrsa -out $SERVER_KEY_PATH 4096
    #openssl ecparam -name secp521r1 -genkey -out $SERVER_KEY_PATH
    echo "$SERVER_KEY_PATH写入完毕"
fi


# 创建域名的生成请求
echo "$DOMAIN/$DOMAIN.csr 正在生成"
openssl req -config "$DOMAIN/$DOMAIN.cnf" -new -key $SERVER_KEY_PATH -sha256 -nodes -outform PEM -out "$DOMAIN/$DOMAIN.csr" -subj "/C=CN/ST=Beijing/L=Beijing/O=$RAND_STR/OU=IT Department/CN=$DOMAIN/emailAddress=admin@$DOMAIN" -extensions v3_req
# openssl req -new -key server-private.pem -out server.csr -subj "/C=US/ST=California/L=San Francisco/O=My Company/CN=www.example.com"


# 使用CA证书和私钥签发证书
echo "$DOMAIN/$DOMAIN.pem 正在生成"
openssl x509 -req -days 3650 -in "$DOMAIN/$DOMAIN.csr" -CA ca.pem -CAkey $CA_KEY_PATH -CAcreateserial  -out "$DOMAIN/$DOMAIN.pem" -extensions v3_req -extfile "$DOMAIN/$DOMAIN.cnf"
#openssl x509 -req -in server.csr -CA ca-cert.pem -CAkey ca-private.pem -CAcreateserial -out server-cert.pem -days 365 -extfile <(printf "subjectAltName = DNS:www.example.com")


# 生成证书链
cat "$DOMAIN/$DOMAIN.pem" ca.pem > "$DOMAIN/full_chain.pem"
cat "$SERVER_KEY_PATH" > "$DOMAIN/$SERVER_KEY_PATH"


