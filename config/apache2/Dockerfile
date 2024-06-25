# Latest version
# FROM php:apache

FROM php:8.1.0-apache

RUN apt update && apt install -y \
    # Install Git
    git \
    zip \
    unzip \
    \
    # Enable htaccess
    && a2enmod ssl expires headers rewrite \
    \
    # PHP Extensions
    && docker-php-ext-install bcmath \
    calendar \
    exif \
    gettext \
    mysqli \
    pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory
WORKDIR /var/www/html

# Change Apache document root directory
RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!/var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Set permissions
# RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && \
#     chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
