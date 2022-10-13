const { User } = require("../database/db");
const moment = require('moment');
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');

const postUser = async (req,res,next) =>{
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    let user = await User.create(req.body);
    res.send(user);
}

const getUsers = async (req,res,next) =>{
    let users = await User.findAll();
    res.json(users);
}

const loginUser = async (req,res,next) =>{
    let user = await User.findOne({where:{user_name:req.body.user_name}});
    if (user){
        const passwordChecking = bcrypt.compareSync(req.body.password, user.password);
        if(passwordChecking){
        res.json({success:createToken(user)})
        }else{
        res.json({error: 'Los datos proporcionados no coinciden con un usuario existente'})
        }
    }else{
        res.json({error: 'Los datos proporcionados no coinciden con un usuario existente'})
    }
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