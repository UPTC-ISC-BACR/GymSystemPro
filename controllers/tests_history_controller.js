const { History_tests } = require("../database/db");


const getTestsHistory = async (req,res,next) =>{
    try {
        let tests_history = await History_tests.findAll();
        res.json(tests_history);
    } catch (error) {
        console.log(error)
    }
}

const getTestsByDocument = async (req,res,next) =>{
    try {
        let bodydata = await sequelize.query(`SELECT * FROM test_histories 
        WHERE document = ${req.body.document};`);
        res.json(bodydata);
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

const addTestToHistory = async (req,res,next) =>{
    try {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await History_tests.create(jsonObject)
        res.json({ "message":"Test añadido a historial" })
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }
}

module.exports = {
    getTestsHistory, addTestToHistory, getTestsByDocument
}