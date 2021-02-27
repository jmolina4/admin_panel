FROM php:7.3.11-fpm-alpine3.9

WORKDIR /app
COPY . .

EXPOSE 8000
CMD [ "php", "-S", "0.0.0.0:8000", "-t", "public" ]
