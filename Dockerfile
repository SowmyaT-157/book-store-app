FROM node:current-alpine3.22

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install

RUN npm run build

RUN npm run lint


# EXPOSE 3000

CMD [ "npm", "run", "start" ]