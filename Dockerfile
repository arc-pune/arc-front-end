# pull official base image
FROM node:16-alpine3.11

# set working directory
WORKDIR /arc-front-end

# add `/arc-front-end/node_modules/.bin` to $PATH
ENV PATH /arc-front-end/node_modules/.bin:$PATH

# install arc-front-end dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add arc-front-end
COPY . ./

# start arc-front-end
CMD ["npm", "start"]
