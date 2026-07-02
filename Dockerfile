FROM node:18

# Install Docker CLI
RUN apt-get update && \
    apt-get install -y docker.io && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]FROM node:18
WORKDIR /app
COPY . .
CMD ["node", "app.js"]
