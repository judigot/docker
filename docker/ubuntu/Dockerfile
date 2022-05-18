FROM ubuntu

# -y to answer "Yes" to all promts

# "software-properties-common" - provides some useful scripts e.g. add-apt-repository

# "su -" - enables su-mode to install sudo

RUN su - && apt update && apt install -y software-properties-common && \
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
    \
    \
    #==========LINUX==========#
    curl \
    sudo \
    #==========LINUX==========#
    \
    \
    \
    #==========MySQL==========#
    mysql-server \
    #==========MySQL==========#
    \
    \
    \
    #==========Jenkins==========#
    # mysql-server \
    #==========Jenkins==========#
    \
    \
    \
    #==========NGINX==========#
    nginx \
    #==========NGINX==========#
    \
    \
    \
    #==========Install PHP & PHP Extensions==========#
    php8.1 \
    php8.1-fpm && \
    #==========Install PHP & PHP Extensions==========#
    \
    \
    \
    #==========Node.js/NVM==========#
    # NODE_VERSION=17.7.0 \
    # curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    # export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \
    # [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    # nvm install $NODE_VERSION \
    #==========Node.js/NVM==========#
    \
    \
    \
    echo "Finished"

CMD service php8.1-fpm start && \
    service mysql start && \
    nginx -g "daemon off;"