FROM node: 16.17.1

WORKDIR /app

COPY . /app

ENV NODE_ENV=produccion

RUN npm i serve -g

RUN npm i --produccion

EXPOSE 3001

CMD ["npm", "run", "serve"]