const { List_Excercises } = require("../database/db");


const getListofExcercises = async (req,res,next) =>{
    try {
        let excercises = await List_Excercises.findAll();
        res.json(excercises);
    } catch (error) {
        console.log(error)
    }
}

const addExcerciseToList = async (req,res,next) =>{
    try {
        await List_Excercises.create(req.body);
        res.json({
            "message":"Ejercicio creado correctamente"
        })
    } catch (error) {
        // const arrayString = Object.keys(req.body)
        // const jsonObject = JSON.parse(arrayString[0])
        // await List_Excercises.create(jsonObject)
        // res.json({ "message":"Ejercicio creado correctamente" })
        console.log(error)
    }
}

module.exports = {
    getListofExcercises, addExcerciseToList
}