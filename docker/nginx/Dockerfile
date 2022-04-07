FROM ubuntu

# -y to answer "Yes" to all promts

# Provides some useful scripts e.g. add-apt-repository
# software-properties-common 
RUN apt update && apt install -y software-properties-common && \
    # Needed to install latest PHP versions
    add-apt-repository ppa:ondrej/php && \
    \
    # Remove command line interactions
    DEBIAN_FRONTEND=noninteractive \
    \
    # Skips upgrades
    apt install --no-install-recommends -y \
    # apt install -y \
    \
    nginx \
    \
    # Install PHP and PHP Extensions
    php8.1 \
    php8.1-fpm
CMD ["nginx", "-g", "daemon off;"]
# CMD /etc/init.d/php7.0-fpm restart && nginx -g "daemon off;"