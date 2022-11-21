const { Physical_tests } = require("../database/db");


const getTests = async (req,res,next) =>{
    try {
        let tests = await Physical_tests.findAll();
        res.json(tests);
    } catch (error) {
        console.log(error)
    }
}

const addTest = async (req,res,next) =>{
    try {
        console.log(req.body)
        await Physical_tests.create(req.body);
        res.json({
            "message":"Test creado correctamente"
        })
    } catch (error) {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await Physical_tests.create(jsonObject)
        res.json({ "message":"Test creado correctamente" })
        console.log(error)
    }
}

module.exports = {
    getTests, addTest
}