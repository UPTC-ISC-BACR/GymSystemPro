const { History_tests } = require("../database/db");


const getTestsHistory = async (req,res,next) =>{
    try {
        let tests_history = await History_tests.findAll();
        res.json(tests_history);
    } catch (error) {
        console.log(error)
    }
}
const addTestToHistory = async (req,res,next) =>{
    try {
        console.log(req.body)
        await History_tests.create(req.body);
        res.json({
            "message":"Test añadido a historial "
        })
    } catch (error) {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await History_tests.create(jsonObject)
        res.json({ "message":"Test añadido a historial" })
        console.log(error)
    }
}

module.exports = {
    getTestsHistory, addTestToHistory
}