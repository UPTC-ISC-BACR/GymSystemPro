const {PlansRecords} = require('../database/db');
const {Plan} = require('../database/db');
const {createInvoice} = require("./invoice_controller");
const{getTodaysDate,getFinalDate} = require('../utilities/date_utils')

const getPlansRecords = async(req, res)=>{
    try {
        const plansRecords = await PlansRecords.findAll();
        res.json(plansRecords)
    } catch (error) {
        res.json({message: error.message})
    }
}

//vincula un plan con un registro
const createPlanRecord = async(req, res, next)=>{
    try { 
        const arrayString = Object.keys(req.body)
        //const jsonObject = JSON.parse(arrayString[0])
        var idRecord = await Promise.all([dataJson = createDataJson(req.body)]).then((values) =>{
            PlansRecords.create(values[0])
            return values[0].id_record
        })
        createInvoice(idRecord, res, next)
    }catch(error){
        console.log(error)
        
        res.json({message: error.message})
    }
}
async function createDataJson(data){
    var final_plan_date = await Promise.all([final_plan_date = getFinalRegistrationDate(data.id_plan)]).then((values) =>{
        return (values[0]);
     })
    const jsonRecord ={
        start_date_plan: getTodaysDate(),
        end_date_plan: final_plan_date,
        id_record:data.id_record,
        id_plan: data.id_plan,
        is_active: true
    }
    return jsonRecord;
}



async function getFinalRegistrationDate(id_plan_request){
    var planDuration = await Promise.all([planDuration = getPlanDuration(id_plan_request)]).then((values) =>{
        return (values[0].duration_months);
    })
    return getFinalDate(planDuration);
}

const getPlanDuration = async(id_plan_request)=>{
    plan_duration = await Plan.findOne({where:{id_plan : id_plan_request}});
    return plan_duration;
}

module.exports = {
    getPlansRecords, createPlanRecord
}