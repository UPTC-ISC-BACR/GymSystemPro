const {Invoce} = require("../database/db")
const {getPricePlan, getInvoiced_periodPlan, getBalance} = require("./admi_controll")

const createInvoice = async(idRecord,res,next) => {
    console.log("BODY invoice");
    try { 
        await Promise.all([dataJson = createJsonInvoice(idRecord)]).then((values) =>{
            Invoce.create(values[0])
         })
        res.json({
            "message":"factura creada correctamente"
        })
    }catch(error){
       console.log("error invoice", error);
    }
}

//factura del plan
async function createJsonInvoice(idRecord){
    /*var total_value_result = await Promise.all([total_value_result = getPricePlan(document)]).then((values) =>{
        return (values[0]);
    })*/
    
    /*var balance_result = await Promise.all([balance_result = getBalance(document)]).then((values) =>{
        return (values[0]);
    })*/

    var invoiced_period_result = await Promise.all([invoiced_period_result = getInvoiced_periodPlan(idRecord)]).then((values) =>{
        return (values[0]);
    })

    var total_value_result = await Promise.all([total_value_result = getPricePlan(idRecord)]).then((values) =>{
        return (values[0]);
    })
    /*var idRecord_result = await Promise.all([idRecord_result = getIdRecord(document)]).then((values) =>{
        return (values[0]);
    })*/
    let dataJson = {
        generation_date: getToStringDate(getTodaysDate()),
        total_value: total_value_result,
        balance: total_value_result, //sin abonos
        invoiced_period: invoiced_period_result,
        id_record: idRecord
    }
    return dataJson
}
//actualiza una factura
const updateInvoice =  async(req, res)=>{
    var id = req.params.id_invoice
    var balance_result = await Promise.all([balance_result = getBalance(id)]).then((values) =>{
        return (values[0]);
    })

   
    try {
            await Invoce.update( 
                {
                    generation_date: getToStringDate(getTodaysDate()), 
                    balance: total_value_result - balance_result
                },
                {
                where: {id_invoice: id}
            })
            res.json({
                "message": "!Factura actualizada correctamente!"
            })
        } catch (error) {
            res.json({message: error.message})
        }
}

function getToStringDate(dateTime){
    return dateTime.getFullYear()+"-"+(dateTime.getMonth()+1)+"-"+dateTime.getDate();
}

function getTodaysDate() {
    var dateTime = new Date();
    return dateTime;
}
module.exports={createInvoice, updateInvoice}