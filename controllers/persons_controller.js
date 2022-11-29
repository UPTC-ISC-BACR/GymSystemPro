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
    }
}

const postPersons = async (req, res, next) =>{
    try { //si viene desde postman
        let person = await Person.create(req.body);
        const jsonUser  = fromatRequest(req.body)
        //llamar el metodo que guarda en BD un Usuario
        if(jsonUser.type_user === "Cl"){
            addRecord(jsonUser.document, req.body.email, (req.body.name+" "+req.body.last_name))
            .then(data=>{console.log("oye", data);})
            
        }
        postUser(jsonUser,res);
        
    } catch (error) { //si viene desde IU
        //console.log("error persons", error);
        //console.log("llega ", req.body);
       
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        //console.log(jsonObject,'JSON OBJECT')
        //crea la persona
        const person = await Person.create(jsonObject)

        const jsonUser  = fromatRequest(jsonObject)
        //llamar el metodo que guarda en BD un Usuario
        //console.log("ENTRO", jsonUser.type_user);
        
        //no esta entrando al if
         if(jsonUser.type_user === "Cl"){
            addRecord(jsonUser.document)
             .then(data=>{console.log("oye", data);})
         }
        postUser(jsonUser,res);
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