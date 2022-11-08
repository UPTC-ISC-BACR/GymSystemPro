const {Fertilizer} = require("../database/db")
const{getToStringDate, getTodaysDate} = require("./plans_records_controller")


const createFertilize = async(req, res)=>{   
    await Fertilizer.create(createJsonFertilize(req.body))
    res.json({
        "message":"Abono registrado correctamente"
    })
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