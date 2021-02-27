FROM composer:2.0.9

WORKDIR /app
COPY . .
RUN composer update --no-scripts

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public" ]
