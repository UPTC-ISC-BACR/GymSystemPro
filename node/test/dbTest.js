const {Persona, Usuario} = require('./../database/db')

const Sequelize = require('sequelize');
const PersonasModel = require('./../models/personas')
const UsuariosModel = require('./../models/usuarios')

const sequelize = new Sequelize('gymsystempro','root','mysql',{
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3306
});

async function conectDB(){
    await sequelize.sync({force:false})
    .then(()=>{
        console.log('COnexion a base de datos realizada')
    })
}
conectDB

function registerPerson(){
    const person = {
        document: 0,
        name: "prueba",
        last_name: "prueba2",
        date_of_birth: "2020-10-20",
        email:"prueba@email.com",
        cell_phone:1,
        type_document:"TI",
        sex: "M"
    }
    Persona.create(person)
    console.log("Persona registrada EXITOSAMENTE");
}
//registerPerson()

async function  getPersons (){
    const persons = await Persona.findAll()
    console.log(persons);
}
//getPersons()


async function  getPerson (){
    const person = await Persona.findAll({
        where:{document:0}
    })
    console.log( person[0].dataValues);

}
//getPerson()

async function updatePerson(){
          await Persona.update(
            {name: "update"},
            {where: {document:0}}
        )
        console.log("!Registro actualizado correctamente!");
}

updatePerson()

async function deletePerson(){
    await Persona.destroy({
        where:{document:0}
    })
    console.log("!Registro Eliminado correctamente!");
}

deletePerson()