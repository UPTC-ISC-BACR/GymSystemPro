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
    try {
        await plans.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un Plam
const updatePlan = async(req, res)=>{
    try {
        await plans.update(req.body, {
            where: {id: req.params.id}
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
        await plans.destroy({
            where: {id: req.params.id}
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
