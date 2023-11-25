FROM node:21-alpine3.17
WORKDIR /app/src/
COPY src/* ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
