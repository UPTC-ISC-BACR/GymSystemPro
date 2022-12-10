const { Body_data, sequelize } = require("../database/db");

const getBodyData = async (req,res,next) =>{
    try {
        let bodydata = await Body_data.findAll();
        res.json(bodydata);
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

const getBodyDataById = async (req,res,next) =>{
    try {
        let bodydata = await sequelize.query(`SELECT * FROM historical_body_data 
        WHERE document = (select document from historical_body_data 
        where id_body_data = ${req.body.id_body_data});`);
        res.json(bodydata);
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

const getBodyDataByDocument = async (req,res,next) =>{
    try {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        let bodydata = await sequelize.query(`SELECT * FROM historical_body_data 
        WHERE document = ${jsonObject.document};`);
        res.json(bodydata);
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}



const addBodyData = async (req,res,next) =>{
    try {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await Body_data.create(jsonObject)
        res.json({ "message":"Añadido historico de medidas corporales" })
    } catch (error) {
        res.json({message: error.message})
        console.log(error)
    }
}

module.exports = {
    getBodyData, addBodyData, getBodyDataById, getBodyDataByDocument
}