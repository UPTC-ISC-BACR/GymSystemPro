
const {Router} = require('express');
const router = Router();
const {Persona, Usuario} = require('./../database/db')

router.get("/api/personas", async (req, res) =>{
  var personas = await Persona.findAll();
    res.json(personas);
  });

router.post("/api/persons", async (req, res) => {
  const {document, rol} = req.body

  console.log("body" , req.body);
  const arrayString = Object.keys(req.body)
  const jsonObjet = JSON.parse(arrayString[0])
  console.log("jsonParser: ",JSON.parse(arrayString[0]));
  var person = await Persona.create(jsonObjet);
  //res.send(person);
  registerUser(jsonObjet.document, jsonObjet.type_user)
  res.sendStatus(200)
  });

//registra en la tabla Usuario
//OJO la constraseña no esta codificada
function registerUser(document, type_user){
  var jsonUser = {
    "id": document,
    "id_user": document,
    "user_name": document,
    "password": document,
    "type_user": type_user,
    "document": document
  }
  console.log(jsonUser);
  Usuario.create(jsonUser);

}
router.post("/api/users/login", function (req, res) {
    res.send(req.body);
  });

module.exports = router;