FROM node:18-alpine3.15
RUN mkdir GymSystemPro
WORKDIR /GymSystemPro
RUN npm init -y
RUN npm i bcryptjs body-parser cors express express-validator jwt-simple method-override moment morgan mysql2 nodemailer sequelize sequelize-cli
RUN mkdir /controllers
COPY /controllers /GymSystemPro/controllers
RUN mkdir /database
COPY /database /GymSystemPro/database
RUN mkdir middlewares
COPY /middlewares /GymSystemPro/middlewares
RUN mkdir models
COPY /models /GymSystemPro/models
RUN mkdir routes
COPY /routes /GymSystemPro/routes
RUN mkdir test
COPY /test /GymSystemPro/test
RUN mkdir utilities
COPY /utilities /GymSystemPro/utilities
COPY /index.js .
EXPOSE 3000
CMD node index.js