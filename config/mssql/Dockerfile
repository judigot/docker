# Use the official SQL Server image as the base
FROM mcr.microsoft.com/mssql/server:2022-latest

# Switch to root user
USER root

# Install sqlcmd and its dependencies
RUN apt-get update && \
    ACCEPT_EULA=Y apt-get install -y --no-install-recommends \
        mssql-tools \
        unixodbc-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Add sqlcmd tools to PATH
ENV PATH="/opt/mssql-tools/bin:$PATH"
