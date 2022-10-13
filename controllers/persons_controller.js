const {Person} = require('../database/db');
const {parseJSON} = require('../utilities/json_parser')

const getPersons = async (req, res, next) =>{
    let persons = await Person.findAll();
    res.json(persons);
} 

const postPersons = async (req, res, next) =>{
    //let data = parseJSON(req.body);
    console.log(req.body)
    //let person = await Person.create(data);
    let person = await Person.create(req.body);
    res.send(person);
}

module.exports = {
    getPersons, postPersons
}