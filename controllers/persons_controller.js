const {Person} = require('../database/db');
const { postUser } = require('./users_controller');
const {addRecord} = require('../controllers/records_controller');

const getPersons = async (req, res, next) =>{
    let persons = await Person.findAll();
    res.json(persons);
} 

const postPersons = async (req, res, next) =>{
    try { //si viene desde postman
        let person = await Person.create(req.body);
        const jsonUser  = fromatRequest(req.body)
        //llamar el metodo que guarda en BD un Usuario
        addRecord(jsonUser.document, req.body.email, (req.body.name+" "+req.body.last_name));
        postUser(jsonUser,res);
        
    } catch (error) { //si viene desde IU
        // const arrayString = Object.keys(req.body)
        // const jsonObject = JSON.parse(arrayString[0])
        // console.log(jsonObject,'JSON OBJECT')
        // //crea la persona
        // const person = await Person.create(jsonObject)

        // const jsonUser  = fromatRequest(jsonObject)
        // //llamar el metodo que guarda en BD un Usuario
        // postUser(jsonUser,res);
        // addRecord(jsonUser.document);
        console.log(error)
    }
}

function fromatRequest(personJSON){
    const jsonUser  = {
        'id': personJSON.document,
        'id_user': personJSON.document,
        'user_name': personJSON.document,
        'password':personJSON.document,
        'type_user':personJSON.type_user,
        'document': personJSON.document
    } 
    return jsonUser
}

module.exports = {
    getPersons, postPersons
}