const { Body_data } = require("../database/db");


const getBodyData = async (req,res,next) =>{
    try {
        let bodydata = await Body_data.findAll();
        res.json(bodydata);
    } catch (error) {
        console.log(error)
    }
}

const getBodyDataById = async (req,res,next) =>{
    try {
        let bodydata = await Body_data.findByPK(req.params.id_body_data);
        res.json(bodydata);
    } catch (error) {
        console.log(error)
    }
}


const addBodyData = async (req,res,next) =>{
    try {
        await Body_data.create(req.body);
        res.json({
            "message":"Añadido historico de medidas corporales"
        })
    } catch (error) {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await Body_data.create(jsonObject)
        res.json({ "message":"Añadido historico de medidas corporales" })
        console.log(error)
    }
}

module.exports = {
    getBodyData, addBodyData, getBodyDataById
}