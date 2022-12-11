const {Person, sequelize} = require('../database/db');
const { postUser } = require('./users_controller');
const {addRecord} = require('../controllers/records_controller');
const { log } = require('console');

const getPersons = async (req, res, next) =>{
    let persons = await Person.findAll();
    res.json(persons);
} 

const getPersonsByName= async (req,res,next) =>{
    try {
        let bodydata = await sequelize.query(`SELECT * FROM persons 
        WHERE name LIKE("${req.body.name}%");
        `);
        res.json(bodydata);
    } catch (error) {
        console.log(error)
        
        res.json({message:error.message})
    }
}

const postPersons = async (req, res, next) =>{
    try { //si viene desde postman
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        const person = await Person.create(jsonObject)

        const jsonUser  = fromatRequest(jsonObject)
        if(jsonUser.type_user === "Cl"){
            addRecord(jsonUser.document, req.body.email, (req.body.name+" "+req.body.last_name))
            .then(data=>{console.log("oye", data);})
        }
        postUser(jsonUser,res);
        
    } catch (error) { 
       console.log(error)
        
        res.json({message:error.message})
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
    getPersons, postPersons, getPersonsByName
}