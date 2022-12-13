<<<<<<< HEAD
FROM nginx:latest
RUN mkdir /var/www/html/react
COPY ./build/ /var/www/html/react
RUN chown -R www-data:www-data /var/www/html/react
COPY ./react.conf /etc/nginx/sites-enabled/
EXPOSE 80
=======
FROM node: 16.17.1

WORKDIR /app

COPY . /app

ENV NODE_ENV=produccion

RUN npm i serve -g

RUN npm i --produccion

EXPOSE 3001

CMD ["npm", "run", "serve"]
>>>>>>> 2e3e04042e431aefe1abc7611fcc143f18c32296
