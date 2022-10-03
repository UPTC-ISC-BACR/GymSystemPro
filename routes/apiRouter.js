
const {Router} = require('express');
const router = Router();
const {Persona, Usuario} = require('./../database/db');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const authenthication_middleware = require('./authenthication_middleware')
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/api/personas",cors(corsOptions) ,async (req, res, next) =>{
  var personas = await Persona.findAll();
    res.json(personas);
  });

router.post("/api/personas/register",cors(corsOptions), async (req, res, next) => {
  console.log(req.body)
  var persona = await Persona.create(req.body);
    res.send(persona);
  });

router.post("/api/usuarios/register",cors(corsOptions), async (req, res, next) => {
    var usuario = await Usuario.create(req.body);
      res.send(usuario);
    });
router.post("/api/users/login",cors(corsOptions), async (req, res, next) => {
  var user = await Usuario.findOne({where:{nombre_usuario:req.body.nombre_usuario}});
  if (user){
    if(user.password == req.body.password){
      res.json({success:createToken(user)})
    }else{
      res.json({error: 'Los datos proporcionados no coinciden con un usuario existente'})
    }
  }else{
    res.json({error: 'Los datos proporcionados no coinciden con un usuario existente'})
  }
    res.send(req.body);
  });
const createToken = (user)=>{
  var payload = {
    userId: user.id_usuario,
    createdAt: moment().unix(),
    expiredAt: moment().add(5,'minutes').unix()
  }
  return jwt.encode(payload, 'encriptacionLOL')
}
module.exports = router;