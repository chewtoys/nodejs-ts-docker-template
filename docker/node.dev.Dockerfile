FROM node:11.9.0-stretch

USER root 

# Create app directory
WORKDIR /app

# Install nodemon for hot reload
RUN npm install -g ts-node-dev typescript ts-node

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

USER node

EXPOSE 8080