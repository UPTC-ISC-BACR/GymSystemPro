const {sequelize} = require("../database/db")
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

//optienen los datos que se mosuestran el el home del admi
const getDataForAdmi = async(req, res)=>{
    const result = await sequelize.query(`SELECT p.document, p.name, r.end_date_register, pr.end_date_plan, r.id_record 
        FROM Persons p, Records r, Plan_Records pr, Plans pl
        WHERE p.document = r.document AND
            pr.id_record = r.id_record AND
            pr.id_plan = pl.id_plan`,{ type: QueryTypes.SELECT })
            .then(data => res.json(data))         
}

//optiene el precio del plan que contrato el cliente
const getPricePlanThePerson = async(document, res)=>{
    console.log("SE ESTA EJECUTANDO");
    const price = await sequelize.query(`SELECT pl.price
    FROM Persons p, Records r, Plan_Records pr, Plans pl
    WHERE p.document = ${document} AND
        p.document = r.document AND
        pr.id_record = r.id_record AND
        pr.id_plan = pl.id_plan`,{ type: QueryTypes.SELECT }) 
    return parseInt(price[0].price)
}


async function getInvoiced_periodPlan(document){
    const period = await sequelize.query(`SELECT  pr.start_date_plan, pr.end_date_plan
        FROM Persons p, Records r, Plan_Records pr, Plans pl
        WHERE p.document = ${document} and
			p.document = r.document AND
            pr.id_record = r.id_record AND
            pr.id_plan = pl.id_plan`,{ type: QueryTypes.SELECT })
    return period[0].start_date_plan + " / " + period[0].end_date_plan
}

async function getBalance(document,req, res){
    const balance = await sequelize.query(`SELECT COALESCE(SUM(value),0) As Total
	FROM Persons p, Records r, invoices i, fertilizers_histories f
        WHERE p.document = ${document} and
			p.document = r.document AND
            r.id_record = i.id_record AND
            i.id_invoice = f.id_invoice`,{ type: QueryTypes.SELECT })   
    return parseInt(balance[0].Total)
}

async function getIdRecord(document){
    const idRecord = await sequelize.query(`SELECT id_record
        FROM Persons, Records
            WHERE Persons.document = ${document} AND
            Persons.document = Records.document`, { type: QueryTypes.SELECT })
    return idRecord[0].id_record
}
//no se esta usando
async function getMaxIdInvoice(){
    const idInvoide = await sequelize.query(`SELECT COALESCE(Max(id_invoice),0) As Total
	FROM invoices i`, { type: QueryTypes.SELECT })

    return idInvoide[0].id_invoice
}

module.exports ={
    getDataForAdmi, getPricePlanThePerson, getInvoiced_periodPlan, getBalance, getIdRecord
}