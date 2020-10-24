# pull official base image
FROM node:15.0.1-alpine as build

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn 

# add app
COPY . ./

# build app
RUN yarn build


# nginx reverse proxy
FROM nginx:1.19.3-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
# start app
# CMD ["yarn", "start"]
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
