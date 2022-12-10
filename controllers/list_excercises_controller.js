const { List_Excercises } = require("../database/db");

const getListofExcercises = async (req,res,next) =>{
    try {
        let excercises = await List_Excercises.findAll();
        res.json(excercises);
    } catch (error) {
        console.log(error)
        res.json({message:error.message})
    }
}

const addExcercises = async ( excercise) =>{
    console.log(excercise);
    new_excercise = await List_Excercises.create(excercise);
    console.log(new_excercise);
}

const addExcerciseToList = async (req,res,next) =>{
    try {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await List_Excercises.create(jsonObject)
        res.json({ "message":"Ejercicio agregado a lista correctamente" })
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

module.exports = {
    getListofExcercises, addExcerciseToList, addExcercises
}