const {sequelize} = require("../database/db")
const Sequelize = require('sequelize');

//optienen los datos que se mosuestran el el home del admi
const getDataForAdmi = async(req, res)=>{
    const result = await sequelize.query(`SELECT p.document, p.name, r.end_date_register, pr.end_date_plan, r.id_record 
        FROM Persons p, Records r, Plan_Records pr, Plans pl
        WHERE p.document = r.document AND
            pr.id_record = r.id_record AND
            pr.id_plan = pl.id_plan`,{ type: Sequelize.SELECT })
            .then(data => res.json(data[0]))         
}


module.exports ={
    getDataForAdmi
}