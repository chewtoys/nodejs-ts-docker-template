FROM node:carbon

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
CMD [ "ts-node-dev", "server/server.ts" ]