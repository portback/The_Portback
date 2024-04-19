FROM node

WORKDIR /user_service

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 8001

CMD [ "npm" , "start" ] 