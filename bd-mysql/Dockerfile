FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root1
ENV MYSQL_DATABASE=prueba

COPY datos.sql /docker-entrypoint-initdb.d/
