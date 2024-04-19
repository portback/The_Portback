FROM node

WORKDIR /comment_service

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 8004

CMD [ "npm" , "start" ] 