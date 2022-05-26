FROM ubuntu

# -y to answer "Yes" to all promts

# "software-properties-common" - provides some useful scripts e.g. add-apt-repository

# "su -" - enables su-mode to install sudo

# "sudo -i" - login as "root"

RUN su - && apt update && \
    \
    apt install -y software-properties-common && \
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
    wget \
    #==========LINUX==========#
    \
    \
    \
    #==========MySQL==========#
    # git \
    #==========MySQL==========#
    \
    \
    \
    #==========MySQL==========#
    # mysql-server \
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
    # nginx \
    #==========NGINX==========#
    \
    \
    \
    #==========Install PHP & PHP Extensions==========#
    # php8.1 \
    # php8.1-fpm \
    #==========Install PHP & PHP Extensions==========#
    \
    \
    \
    && \
    echo "..."

RUN apt install -y \
    #==========Java==========#
    openjdk-11-jre-headless \
    #==========Java==========#
    && \
    echo "..."

# Jenkins needs Git to pull repositories. Install Git first
RUN curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null && \
    echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null && \
    apt update && \
    apt install -y \
    #==========Jenkins==========#
    jenkins \
    #==========Jenkins==========#
    && \
    echo "..."

#==========Node.js/NVM==========#
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# ENV NODE_VERSION 17.7.0
# ENV NVM_DIR ~/.nvm
# RUN \
#     #=====OPTION 1=====#
#     # NVM_DIR=~/.nvm \
#     # && \
#     # . $NVM_DIR/nvm.sh; \
#     #=====OPTION 1=====#
#     \
#     #=====OPTION 2=====#
#     . ~/.bashrc; \
#     #=====OPTION 1=====#
#     nvm install $NODE_VERSION; \
#     nvm use $NODE_VERSION;
# ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
# ENV PATH $NVM_DIR:$NVM_DIR/v$NODE_VERSION/node_modules/npm/bin:$PATH
# ENV NVM_HOME $NVM_DIR
#==========Node.js/NVM==========#

# Start services
CMD \
    # service php8.1-fpm start \
    # && \
    jenkins \
    # && \
    # service mysql start \
    # && \
    # nginx -g "daemon off;" \
    && \
    sleep infinity