const Sequelize = require('sequelize');
const PersonsModel = require('../models/persons');
const UsersModel = require('../models/users');
const PlansModel = require('..//models/plans');
const RecordsModel = require('../models/records');
const PlanRecordsModel = require('../models/plan_records');

const InvoceModel = require("../models/Invoice_model")
const FertilizerModel = require("../models/fertilizer_model")

const sequelize = new Sequelize('gymsystempro','root','mysql',{
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3307
});

const Person = PersonsModel(sequelize, Sequelize);
const User = UsersModel(sequelize, Sequelize);
const Plan = PlansModel(sequelize, Sequelize);
const Record = RecordsModel(sequelize, Sequelize);
const PlansRecords = PlanRecordsModel(sequelize, Sequelize);

const Invoce = InvoceModel(sequelize, Sequelize);
const Fertilizer = FertilizerModel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Conexion a base de datos realizada')
})

module.exports = {
    Person, User, Plan, Record, PlansRecords, Invoce, Fertilizer, sequelize
}