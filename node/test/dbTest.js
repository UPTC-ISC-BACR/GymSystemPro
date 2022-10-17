const {Persona, Usuario} = require('./../database/db')

const Sequelize = require('sequelize');
const PersonasModel = require('./../models/personas')
//const UsuariosModel = require('./../models/usuarios')
const colors = require('colors');

const sequelize = new Sequelize('gymsystempro','root','mysql',{
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3306
});

async function conectDB(){
    await sequelize.sync({force:false})
    .then(()=>{
        console.log(colors.green('Conexion a base de datos realizada Hola'))
    })
    .catch(error =>{
        console.log("conexion Fallo".red);
    })
}
conectDB

function registerPerson(person){
    Persona.create(person)
    .then(()=>{
        console.log(colors.green("Persona registrada EXITOSAMENTE"));
    })
    .catch(error =>{
        console.log(colors.red("no se registro la Persona: ", error.parent.sqlMessage));
    })
}

const person = {
    document: 1,
    name: "prueba",
    last_name: "prueba2",
    date_of_birth: "2020-10-20",
    email:"prueba@email.com",
    cell_phone:1,
    type_document:"TI",
    gender: "M"
}

registerPerson(person)

async function  getPersons (){
    const persons = await Persona.findAll()
    .then(persons =>{
        console.log(colors.blue(persons));
    })
    .catch((error)=>{
        console.log(colors.red("no se pudo obtener la lista de Personas: ", error));
    })
}
getPersons()


async function  getPerson (document){
    const person = await Persona.findByPk(document)
    if (person === null) {
        console.log(colors.red('Not found!'));
      } else {
        console.log(colors.green(person));
      }
    //console.log( person[0].dataValues);

}
getPerson(1)
getPerson(10)

async function updatePerson(name, document){
          await Persona.update(
            {name: name},
            {where: {document:document}}
        )
        .then(()=>{
            console.log(colors.green("!Registro actualizado correctamente!"));
        })
        .catch((error)=>{
            console.log(colors.red("NO se pudo actualizar a la persona", error.parent.sqlMessage));
        })
}

updatePerson("jugando", 0)

async function deletePerson(document){
    await Persona.destroy({
        where:{document:document}
    })
    .then(()=>{
        console.log(colors.green("!Registro Eliminado correctamente!"));
    })
    .catch((error)=>{
        console.log(colors.red("No se elimino el registro", error.parent.sqlMessage));
    })
}

//deletePerson(0)
//deletePerson(10)