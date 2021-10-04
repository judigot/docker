FROM php:8.0-apache

# Install Git and dependencies
RUN apt-get update && apt-get install -y \
    git \
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
