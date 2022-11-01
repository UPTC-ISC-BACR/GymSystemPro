const Sequelize = require('sequelize');
const PersonsModel = require('../models/persons');
const UsersModel = require('../models/users');
const PlansModel = require('..//models/plans');
const RecordsModel = require('../models/records');

const sequelize = new Sequelize('gymsystempro','root','mysql',{
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3306
});

const Person = PersonsModel(sequelize, Sequelize);
const User = UsersModel(sequelize, Sequelize);
const Plan = PlansModel(sequelize, Sequelize);
const Record = RecordsModel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Conexion a base de datos realizada')
})

module.exports = {
    Person, User, Plan, Record
}