FROM library/nginx:latest

WORKDIR /usr/share/nginx/html/

COPY ./dist  /usr/share/nginx/html/
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
