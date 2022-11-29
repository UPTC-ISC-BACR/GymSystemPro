const Sequelize = require('sequelize');
const PersonsModel = require('../models/persons');
const UsersModel = require('../models/users');
const PlansModel = require('..//models/plans');
const RecordsModel = require('../models/records');
const PlanRecordsModel = require('..//models/plan_records');
const ExcercisesModel = require('..//models/excercises');
const TestsModel = require('..//models/physical_test');
const Tests_History_model = require('..//models/tests_history');
const ListExcercisesModel = require('..//models/list_excercises');
const BodyDataModel = require('..//models/body_data')

const InvoceModel = require("../models/Invoice_model")
const FertilizerModel = require("../models/fertilizer_model")

                                //nombre bd, usuario, password
const sequelize = new Sequelize(heroku_d7b5f43499dea1e,'b4f8bb6f2d89f7','285945f5',{
    host:'us-cdbr-east-06.cleardb.net',
    dialect:'mysql',
    port: 3306
});

const Person = PersonsModel(sequelize, Sequelize);
const User = UsersModel(sequelize, Sequelize);
const Plan = PlansModel(sequelize, Sequelize);
const Record = RecordsModel(sequelize, Sequelize);
const PlansRecords = PlanRecordsModel(sequelize, Sequelize);
const Excercises = ExcercisesModel(sequelize, Sequelize);
const Physical_tests = TestsModel(sequelize, Sequelize);
const History_tests = Tests_History_model(sequelize, Sequelize);
const List_Excercises = ListExcercisesModel(sequelize, Sequelize);
const Body_data = BodyDataModel(sequelize, Sequelize);

const Invoce = InvoceModel(sequelize, Sequelize);
const Fertilizer = FertilizerModel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('Conexion a base de datos realizada')
})

module.exports = {
    Person, User, Plan, Record, PlansRecords, Invoce,
    Fertilizer, sequelize, Excercises, Physical_tests,
    History_tests, List_Excercises, Body_data
}