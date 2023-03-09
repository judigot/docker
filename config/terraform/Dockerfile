FROM ubuntu

# -y to answer "Yes" to all promts

# "su -" - enables su-mode to install sudo

# "sudo -i" - login as "root"

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

RUN \
    wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg; \
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list; \
    apt update && apt install terraform \
    && \
    echo "..."

# Start services
CMD \
    sleep infinity