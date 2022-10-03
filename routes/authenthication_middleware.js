const jwt = require('jwt-simple')
const checkToken = (req, res, next) =>{
    
    if(!req.headers['user_token']){
        return res.json({error: 'Es obligatorio incluir el token dentro de la cabecera'});
    }
    const userToken = req.headers['user-token'];
    let payload = {};
    try{
        payload = jwt.decode(userToken,'encriptacionLOL');
    }catch(err){
        return res.json({error:'Token incorrecto'});
    }

    if (payload.expiredAt < moment().unix()){
        return res.json({error:'El token ha expirado'});
    }
    req.id_usuario = payload.id_usuario;
    next();
}

module.export = {
    checkToken: checkToken
}