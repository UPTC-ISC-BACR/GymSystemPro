const { Excercises } = require("../database/db");


const getExcercises = async (req,res,next) =>{
    try {
        let excercises = await Excercises.findAll();
        res.json(excercises);
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

const addExcercises = async (req,res,next) =>{
    try {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await Excercises.create(jsonObject)
        res.json({ "message":"Ejercicio creado correctamente" })
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

module.exports = {
    getExcercises, addExcercises
}