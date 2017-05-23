FROM node:boron
# latest LTS (long term support) version boron of node as of 2/22/2017
# https://hub.docker.com/_/node/

MAINTAINER "Jonathan D'Andries"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# use nodemon for development
RUN npm install --global nodemon

# Install app dependencies
COPY src/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY src/ /usr/src/app/

EXPOSE 8080

CMD [ "npm", "start" ]
#CMD ["nodemon", "-L", "/usr/src/app/"]
#CMD ["nodemon", "-L"]
