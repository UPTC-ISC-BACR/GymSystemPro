const {PlansRecords} = require('../database/db');
const {Plan} = require('../database/db');

const getPlansRecords = async(req, res)=>{
    try {
        const plansRecords = await PlansRecords.findAll();
        res.json(plansRecords)
    } catch (error) {
        res.json({message: error.message})
    }
    
}

const createPlanRecord = async(req, res)=>{
    try { 
        await PlansRecords.create(createDataJson(req.body))
        res.json({
            "message":"Registro creado correctamente"
        })
        
    }catch(error){
        const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await PlansRecords.createDataJson(jsonObject)
        res.json({ "message":"Asignacion de plan realizada con exito" })
    }
}
function createDataJson(data){
    var final_plan_date = getFinalRegistrationDate(data.id_plan);
    const jsonRecord ={
        start_date_plan:getToStringDate(getTodaysDate()),
        end_date_plan: getToStringDate(final_plan_date),
        id_record:data.id_record,
        id_plan: data.id_plan
    }
    return jsonRecord;
}

function getTodaysDate() {
    var dateTime = new Date();
    return dateTime;
}

function getFinalRegistrationDate(id_plan_request){
    console.log("xd")
    console.log(getPlanDuration(id_plan_request)) 
    console.log("xd")
    var finalDate = new Date();
    finalDate.setFullYear(finalDate.getMonth() + getPlanDuration(id_plan_request).duration_months);
    console.log(finalDate)
    return finalDate;
}

const getPlanDuration = async(id_plan_request)=>{
    plan_duration = await Plan.findOne({where:{id_plan : id_plan_request}});
    return plan_duration;
}

function getToStringDate(dateTime){
    return dateTime.getDate()+"-"+(dateTime.getMonth()+1)+"-"+dateTime.getFullYear();
}


module.exports = {
    getPlansRecords, createPlanRecord
}