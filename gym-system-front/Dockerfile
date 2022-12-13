FROM nginx:latest
RUN mkdir /var/www/html/react
COPY ./build/ /var/www/html/react
RUN chown -R www-data:www-data /var/www/html/react
COPY ./react.conf /etc/nginx/sites-enabled/
EXPOSE 80