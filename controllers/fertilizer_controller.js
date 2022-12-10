const {Fertilizer} = require("../database/db")
const{updateInvoice} = require("./invoice_controller")
const{getTodaysDate} = require('../utilities/date_utils')


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
        date_fertilizers: getTodaysDate(),
        id_invoice: body.id_invoice
    }
    return fertilize
}

module.exports={
    createFertilize
}