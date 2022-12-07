const { Physical_tests } = require("../database/db");
const { addExcercises} = require("./list_excercises_controller")


const getTests = async (req,res,next) =>{
    try {
        let tests = await Physical_tests.findAll();
        res.json(tests);
    } catch (error) {
        console.log(error)
    }
}

const addTestWithExcercises = async(req, res, next) =>{
    try {
        number_of_excercises = req.body.list_exercices.length;
        excercises_id = req.body.list_exercices
        jsonTest = {
            'test_name' : req.body.test_name,
             'type' : req.body.type
        }
        test = await Physical_tests.create(jsonTest);
        for (let i = 0; i < number_of_excercises; i++) {
            addExcercises({'id_test': test.dataValues.id_test, 'id_exercise': excercises_id[i]})
        }
        res.send({'message':'se creo correctamente la lista de ejercicios'})
    } catch (error) {
        console.log(error)
        res.send(error.message)
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
    getTests, addTest, addTestWithExcercises
}