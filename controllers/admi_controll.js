const {sequelize, PlansRecords} = require("../database/db")
//const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const plan_records = require("../models/plan_records")


//optienen lo registrso que no tienen asociado un plan
const getRecordNoPlan = async(req, res, next)=>{
    const result = await sequelize.query(`SELECT  r.document, r.id_record
	FROM records r
	LEFT JOIN plan_records pr
    ON r.id_record = pr.id_record
    where isnull(pr.id_record) or
    pr.is_active = false`,{ type: QueryTypes.SELECT })
    .then((answer =>{res.send(answer)}))
    //.then(data => {
        //console.log(data);
        //data.forEach(findOwnerByRecord)
    //})

    /*async function findOwnerByRecord(element){
            await sequelize.query(`select p.document, p.name, p.last_name, r.id_record
                    from persons p, records r
                    where p.document = r.document and
                    r.id_record = ${element.id_record}`,{ type: QueryTypes.SELECT })
                    .then((answer =>{res.send(answer)}))
        }*/
}


//optiene el precio del plan que contrato un registro
const getPricePlan = async(id_record, res)=>{
    let price = await sequelize.query(`SELECT pl.price
    FROM Records r, Plan_Records pr, Plans pl
    WHERE r.id_record = ${id_record} AND
        pr.id_record = r.id_record AND
        pr.id_plan = pl.id_plan`,{ type: QueryTypes.SELECT }) 
    console.log("36 admi", price, "idRecord", id_record);
    return parseInt(price[0].price)
}


async function getInvoiced_periodPlan(idRecord){
    /*const period = await sequelize.query(`SELECT  pr.start_date_plan, pr.end_date_plan
        FROM Records r, Plan_Records pr, Plans pl
        WHERE r.id_record = ${idRecord} AND
        pr.id_record = r.id_record AND
        pr.id_plan = pl.id_plan;`,{ type: QueryTypes.SELECT }) 
        */
        
    const period = await sequelize.query(`SELECT  *
        FROM  Plan_Records
        WHERE id_record = ${idRecord};`,{ type: QueryTypes.SELECT })
        
    return period[0].start_date_plan + " / " + period[0].end_date_plan

}

const getTableforFertilizes = async(req, res)=>{
    await sequelize.query(`SELECT p.document, p.name, r.end_date_register, pr.end_date_plan, i.balance, r.id_record, i.id_invoice
        FROM Persons p, Records r, Plan_Records pr, Plans pl, invoices i
        WHERE p.document = r.document AND
            pr.id_record = r.id_record AND
            pr.id_plan = pl.id_plan and
            pr.is_active = true and
            r.is_active = true and
            r.id_record = i.id_record`,{ type: QueryTypes.SELECT })
            .then(answer =>{res.send(answer)})
}

//optienen la suma de los abonos de una factura dada
async function getBalance(idInvoice,req, res){
    const balance = await sequelize.query(`SELECT COALESCE(SUM(value),0) As Total
	from invoices i, fertilizers_histories f
    where i.id_invoice = ${idInvoice} and
    i.id_invoice = f.id_invoice`,{ type: QueryTypes.SELECT })   
    return parseInt(balance[0].Total)
}


///no se esta usando
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
module.exports = {
    getPricePlan, getInvoiced_periodPlan, getBalance, getRecordNoPlan, getTableforFertilizes
}