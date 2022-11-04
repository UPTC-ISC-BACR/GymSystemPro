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
        await Promise.all([dataJson = createDataJson(req.body)]).then((values) =>{
            PlansRecords.create(values[0])
         })
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
async function createDataJson(data){
    var final_plan_date = await Promise.all([final_plan_date = getFinalRegistrationDate(data.id_plan)]).then((values) =>{
        return (values[0]);
     })
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

async function getFinalRegistrationDate(id_plan_request){
    var finalDate = new Date();
    var planDuration = await Promise.all([planDuration = getPlanDuration(id_plan_request)]).then((values) =>{
        return (values[0].duration_months);
    })
    finalDate.setMonth(finalDate.getMonth() + planDuration);
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
    getPlansRecords, createPlanRecord, getToStringDate, getTodaysDate
}