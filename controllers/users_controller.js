const { User } = require("../database/db");
const moment = require('moment');
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');

const postUser = async (req, res,next) =>{
    console.log("7777" , req);
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)    
    } catch (error) {
        req.password = bcrypt.hashSync(req.password, 10)
        
    }
    let user = await User.create(req);
    res.sendStatus(200)
}

const getUsers = async (req,res,next) =>{
    let users = await User.findAll();
    res.json(users);
}

const loginUser = async (req,res,next) =>{
    let body = req.body
    try {
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        body  = formatRequest(jsonObject)
    } catch (error) {
    }
    console.log("ojo", body);
    let user = await User.findOne({where:{user_name:body.user_name}});
        if (user){
            const passwordChecking = bcrypt.compareSync(body.password, user.password);
            if(passwordChecking){
            res.json({success:createToken(user)})
            }else{
            res.json({error: 'Los datos proporcionados no coinciden con un usuario existente'})
            }
        }else{
            res.json({error: 'Los datos proporcionados no coinciden con un usuario existente'})
        }
}

function formatRequest(user){
    const jsonUser  = {
            'user_name': user.user_name,
            'password':user.password,
        }
    return jsonUser
}

const createToken = (user)=>{
    var payload = {
      userId: user.id_user,
      createdAt: moment().unix(),
      expiredAt: moment().add(60,'minutes').unix()
    }
    return jwt.encode(payload, 'encriptacionLOL')
  }

module.exports = {
    postUser,loginUser,getUsers
}