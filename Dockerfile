# Using a node js image
FROM node:18-alpine

#Creating a work directory called /app
WORKDIR /app

#Copying the package json related files to working directory
COPY package*.json ./
COPY tsconfig.json ./

#Copying source code related folders to working directory
COPY ./src ./src
COPY ./public ./public

#Installing the project dependencies using npm and package for serving the html content
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

#To expose the port 3000 within container
# Serve js package uses port 3000 by default
EXPOSE 3000

#Command to start the server within the container
CMD ["serve","-s", "build"]