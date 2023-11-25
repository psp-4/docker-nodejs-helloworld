FROM node:21-alpine3.17
WORKDIR /tmp/hello-world
COPY ./src/* /tmp/hello-world/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
