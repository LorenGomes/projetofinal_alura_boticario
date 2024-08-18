FROM node:20

#ENV DOCKER_MONGO_HOSTNAME='mongo'

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 

CMD ["npm", "start"]

