FROM node:boron
# latest LTS (long term support) version boron of node as of 2/22/2017
# https://hub.docker.com/_/node/

MAINTAINER "Jonathan D'Andries" <jonathandandries@gmail.com> (https://github.com/jonathandandries)

# rsync and zip are used by node-lambda to package our app for AWS.
RUN apt-get update && apt-get install -y rsync zip

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

EXPOSE 3000 5858

# Non-root user important for OpenShift
USER node

CMD [ "npm", "start" ]

# Running with nodemon automatically reloads the server if any files have
# changed. Useful for development. If you want this, my recommendation is to
# set CMD to the following during the "docker run" phase.
#CMD ["nodemon", "-L"]
