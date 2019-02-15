FROM node:carbon

# Create app directory
WORKDIR /app

# Install nodemon for hot reload
RUN npm install -g nodemon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

RUN npm i -g ts-node-dev typescript

EXPOSE 8080
CMD [ "ts-node-dev", "server/server.ts" ]