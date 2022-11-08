const {Invoce} = require("../database/db")
const {getPricePlanThePerson, getInvoiced_periodPlan, getBalance, getIdRecord} = require("./admi_controll")

const{getToStringDate, getTodaysDate} = require("./plans_records_controller")

const createInvoice = async(req, res) => {
    try { 
        await Promise.all([dataJson = createJsonInvoice(req.params.document)]).then((values) =>{
            Invoce.create(values[0])
         })
        res.json({
            "message":"Registro creado correctamente"
        })
        
    }catch(error){
        /*const arrayString = Object.keys(req.body)
        const jsonObject = JSON.parse(arrayString[0])
        await PlansRecords.createDataJson(jsonObject)
        res.json({ "message":"Asignacion de plan realizada con exito" })*/
    }
}

async function createJsonInvoice(document){
    var total_value_result = await Promise.all([total_value_result = getPricePlanThePerson(document)]).then((values) =>{
        return (values[0]);
    })
    
    var balance_result = await Promise.all([balance_result = getBalance(document)]).then((values) =>{
        return (values[0]);
    })

    var invoiced_period_result = await Promise.all([invoiced_period_result = getInvoiced_periodPlan(document)]).then((values) =>{
        return (values[0]);
    })

    var idRecord_result = await Promise.all([idRecord_result = getIdRecord(document)]).then((values) =>{
        return (values[0]);
    })

   
    let dataJson = {
        
        generation_date: getToStringDate(getTodaysDate()),
        total_value: total_value_result,
        balance: balance_result,
        invoiced_period: invoiced_period_result,
        id_record: idRecord_result
    }
    console.log("HOLA", dataJson);
    return dataJson
}

module.exports={createInvoice}