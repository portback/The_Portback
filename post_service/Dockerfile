FROM node

WORKDIR /post_service

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 8002

CMD [ "npm" , "start" ] 