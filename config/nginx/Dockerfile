# FROM ubuntu
FROM ubuntu:jammy

EXPOSE 80
EXPOSE 443

# Remove boilerplate: FROM ubuntu
# RUN rm /var/www/html/*

# Remove boilerplate: FROM nginx
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

# #==========Cerbot & Nginx==========#
RUN echo "Installing Cerbot & Nginx..." && \
    # Remove command line interactions
    DEBIAN_FRONTEND=noninteractive \
    apt install -y \
    #=====Packages=====#
    python3-certbot-nginx \
    #=====Packages=====#
    && \
    echo "..."
# #==========Cerbot & Nginx==========#

CMD nginx -g "daemon off;"