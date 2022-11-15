const {Fertilizer} = require("../database/db")
const{getToStringDate, getTodaysDate} = require("./plans_records_controller")
const{updateInvoice} = require("./invoice_controller")


const createFertilize = async(req, res, next)=>{   
    var fertilize = await Fertilizer.create(createJsonFertilize(req.body))
    //actualizar la factura INVOICE
    console.log("verdad", fertilize.id_invoice);
    updateInvoice(req, res, next)
    // res.json({
    //     "message":"Abono registrado correctamente"
    // })
}

function createJsonFertilize(body){
    const fertilize = {
        value:body.value,
        date_fertilizers: getToStringDate(getTodaysDate()),
        id_invoice: body.id_invoice
    }
    return fertilize
}

module.exports={
    createFertilize
}