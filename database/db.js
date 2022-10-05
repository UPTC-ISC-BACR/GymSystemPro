const Sequelize = require('sequelize');
const PersonasModel = require('./../models/personas')
const UsuariosModel = require('./../models/usuarios')

const sequelize = new Sequelize('gymsystempro','root','mysql',{
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3306
});

const Persona = PersonasModel(sequelize, Sequelize);
const Usuario = UsuariosModel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log('COnexion a base de datos realizada')
})

module.exports = {
    Persona,Usuario
}