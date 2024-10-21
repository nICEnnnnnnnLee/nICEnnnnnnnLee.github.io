#!/bin/bash
cd $(dirname $0)

cat <<EOF > "robots.txt"
User-agent: *
Disallow: /
EOF
echo "robots.txt文件写入完毕"
fi


