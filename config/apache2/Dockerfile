# Latest version
# FROM php:apache

FROM php:8.0.0-apache

RUN apt update && apt install -y \
    # Install Git
    # git \
    \
    # Enable htaccess
    && a2enmod ssl expires headers rewrite \
    \
    # PHP Extensions
    && docker-php-ext-install bcmath \
    && docker-php-ext-install calendar \
    && docker-php-ext-install exif \
    && docker-php-ext-install gettext \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
