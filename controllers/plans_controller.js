const {Plan} = require('../database/db');

//mostrar todos los planes
const getAllPlans = async(req, res)=>{
    try {
        const plans = await Plan.findAll();
        res.json(plans)
    } catch (error) {
        res.json({ "message":error.message})
        console.log(error)
    }
    
}

//crear un Plan
const createPlan = async(req, res)=>{
    try { // si viene de postman
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
            
        await Plan.create(jsonObject)
        res.json({ "message":"Registro creado correctamente" })
        
    }catch(error){ // si viene de IU
        res.json({ "message":error.message})
        console.log(error)
    }
}

//Actualizar un Plam
const updatePlan = async(req, res)=>{
    console.log(req.body,'asdfasdfasdfasdfasdfasdfasd')
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
const deletePlan = async (req, res)=>{
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

//optienen el plan por Id
const getPlanById = async(req, res)=>{
    try {
        const plan = await Plan.findByPk(req)
            if (plan === null) {
                console.log('Not found!');
              } else {
                console.log(plan instanceof Plan); //True
                console.log(plan.id_plan);
              }
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports ={
    getAllPlans, createPlan, updatePlan, deletePlan, getPlanById
}
