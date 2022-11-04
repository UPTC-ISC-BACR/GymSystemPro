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
    port: 3306
});

const Person = PersonsModel(sequelize, Sequelize);
const User = UsersModel(sequelize, Sequelize);
const Plan = PlansModel(sequelize, Sequelize);
const Record = RecordsModel(sequelize, Sequelize);
const PlansRecords = PlanRecordsModel(sequelize, Sequelize);

const Invoce = InvoceModel(sequelize, Sequelize);
const Fertilizer = FertilizerModel(sequelize, Sequelize);

/*const [results, metadata] = await sequelize.query(
    `SELECT p.document, p.name, r.end_date_register, pl.end_date_plan 
        FROM Persons p, Record r, Plan_Records pr, Plans pl
        WHERE p.documento = r.document AND
            pr.id_record = r.id_record AND
            pr.id_plan = pl.id_plan`);*/




const p = await sequelize.query(`select * from persons p, users u 
            where p.document = u.document AND
            u.type_user= ${rol}`, { type: Sequelize.SELECT });

console.log(p);





sequelize.sync({force:false})
.then(()=>{
    console.log('Conexion a base de datos realizada')

    getPersonByRol("Ad")
})

module.exports = {
    Person, User, Plan, Record, PlansRecords, Invoce, Fertilizer
}