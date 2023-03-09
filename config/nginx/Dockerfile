# FROM ubuntu
FROM ubuntu:jammy

EXPOSE 80
EXPOSE 443

# Remove boilerplate
# RUN rm /usr/share/nginx/html/*

RUN echo "Initializing Ubuntu..." && \
    su - && apt update && \
    \
    # "software-properties-common" - provides some useful scripts e.g. add-apt-repository
    apt install -y software-properties-common && \
    \
    # Remove command line interactions
    DEBIAN_FRONTEND=noninteractive \
    \
    # Skips upgrades
    apt install --no-install-recommends -y \
    # apt install -y \
    #==========Packages==========#
    curl \
    sudo \
    wget \
    #==========Packages==========#
    && \
    echo "..."

# #==========Nginx==========#
RUN echo "Installing Nginx..." && \
    # Remove command line interactions
    DEBIAN_FRONTEND=noninteractive \
    apt install -y \
    #=====Packages=====#
    nginx \
    #=====Packages=====#
    && \
    echo "..."
# #==========Nginx==========#

CMD nginx -g "daemon off;"