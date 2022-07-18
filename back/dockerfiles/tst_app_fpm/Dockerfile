FROM php:8.0.2-fpm

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        libzip-dev \
        libmemcached-dev \
        libz-dev \
        libpq-dev \
        libjpeg-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libfreetype6-dev \
        libssl-dev \
        libmcrypt-dev \
        mariadb-client \
        && apt-get clean \
        && rm -rf /var/lib/apt/lists/*

#RUN docker-php-ext-install mcrypt
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install zip
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd
RUN docker-php-ext-install opcache
RUN usermod -u 1000 www-data