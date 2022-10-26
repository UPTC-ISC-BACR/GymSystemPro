const Sequelize = require('sequelize');
const PersonsModel = require('../models/persons')
const UsersModel = require('../models/users')
const PlanModel = require("../models/plans")

const sequelize = new Sequelize('gymsystempro','root','mysql',{
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3306
});

const Person = PersonsModel(sequelize, Sequelize);
const User = UsersModel(sequelize, Sequelize);
const Plan = PlanModel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Conexion a base de datos realizada')
})

module.exports = {
    Person,User, Plan
}