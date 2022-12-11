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

async function createJsonFertilize(body){
    var first_date = await Promise.all([first_date = getTodaysDate()]).then((values) =>{
        return (values[0]);
     })
    const fertilize = {
        value:body.value,
        date_fertilizers: first_date,
        id_invoice: body.id_invoice
    }
    return fertilize
}

module.exports={
    createFertilize
}