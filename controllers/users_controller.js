const { User } = require("../database/db");
const moment = require('moment');
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');

const postUser = async (req, res,next) =>{
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)    
    } catch (error) {
        req.password = bcrypt.hashSync(req.password, 10)
        
    }
    await User.create(req);
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
    console.log("ojo", body.user_name,'asdfasdfasdf');
    let user = await User.findOne({where:{user_name:body.user_name}});
        if (user){
            console.log(body.password, user.password,"contraselassssss")
            const passwordChecking = bcrypt.compareSync(body.password, user.password);
            if(passwordChecking){
            res.json({
                user:user.user_name,
                type:user.type_user,
                success:createToken(user)})
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
      role:user.type,
      createdAt: moment().unix(),
      expiredAt: moment().add(60,'minutes').unix()
    }
    return jwt.encode(payload, 'encriptacionLOL')
  }

module.exports = {
    postUser,loginUser,getUsers
}