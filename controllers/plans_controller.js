const {Plan} = require('../database/db');

//mostrar todos los planes
const getAllPlans = async(req, res)=>{
    try {
        const plans = await Plan.findAll();
        res.json(plans)
    } catch (error) {
        res.json({message: error.message})
    }
    
}

//crear un Plan
const createPlan = async(req, res)=>{
    try { // si viene de postman
        await Plan.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
        
    }catch(error){ // si viene de IU
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
            
        await Plan.create(jsonObject)
        res.json({ "message":"Registro creado correctamente" })
    }
}

//Actualizar un Plam
const updatePlan = async(req, res)=>{
    try {
        await Plan.update(req.body, {
            where: {id_plan: req.params.id_plan}
        })
        res.json({
            "message": "!Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un plan
const deletePlan = async (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    try {
        await Plan.destroy({
            where: {id_plan: req.params.id_plan}
        })
        res.json({
            "message": "!Registro Eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports ={
    getAllPlans, createPlan, updatePlan, deletePlan
}
