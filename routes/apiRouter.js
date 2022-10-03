
const {Router} = require('express');
const router = Router();
const {Persona, Usuario} = require('./../database/db')

router.get("/api/personas", async (req, res) =>{
  var personas = await Persona.findAll();
    res.json(personas);
  });

router.post("/api/personas/register", async (req, res) => {
  var persona = await Persona.create(req.body);
    res.send(persona);
  });

router.post("/api/usuarios/register", async (req, res) => {
    var usuario = await Usuario.create(req.body);
      res.send(usuario);
    });
router.post("/api/users/login", function (req, res) {
    res.send(req.body);
  });

module.exports = router;