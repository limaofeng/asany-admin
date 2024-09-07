#!/bin/sh

# 替换 index.html 中的 API_URL 和 GRAPHQL_URL 占位符
sed -i "s|REPLACE_APPID|${APPID}|g" /usr/share/nginx/html/index.html
sed -i "s|REPLACE_GRAPHQL_URL|${GRAPHQL_URL}|g" /usr/share/nginx/html/index.html
sed -i "s|REPLACE_GRAPHQL_WS_URL|${GRAPHQL_WS_URL}|g" /usr/share/nginx/html/index.html

sed -i "s|REPLACE_WEBSITE_URL|${WEBSITE_URL}|g" /usr/share/nginx/html/index.html
sed -i "s|REPLACE_MOBILE_URL|${MOBILE_URL}|g" /usr/share/nginx/html/index.html
sed -i "s|REPLACE_SHORT_DOMAIN_NAME|${SHORT_DOMAIN_NAME}|g" /usr/share/nginx/html/index.html

sed -i "s|REPLACE_STORAGE_URL|${STORAGE_URL}|g" /usr/share/nginx/html/index.html
sed -i "s|REPLACE_OPEN_IM_API_URL|${OPEN_IM_API_URL}|g" /usr/share/nginx/html/index.html
sed -i "s|REPLACE_OPEN_IM_WS_URL|${OPEN_IM_WS_URL}|g" /usr/share/nginx/html/index.html

# 启动 nginx 或其他服务器
nginx -g 'daemon off;'
