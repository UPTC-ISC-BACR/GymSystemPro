const {Invoce} = require("../database/db")
const {getPricePlan, getInvoiced_periodPlan, getBalance} = require("./admi_controll")

const createInvoice = async(idRecord,res,next) => {
    try { 
        await Promise.all([dataJson = createJsonInvoice(idRecord)]).then((values) =>{
            Invoce.create(values[0])
         })
        res.json({
            "message":"factura creada correctamente"
        })
    }catch(error){
       console.log("error create invoice", error);
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
const updateInvoice =  async(req, res, next)=>{
    var id = req.body.id_invoice
    console.log("update", id);
    var balance_result = await Promise.all([balance_result = getBalance(id)]).then((values) =>{
        return (values[0]);
    })

    var total_value_result = await Promise.all([total_value_result = getPricePlan(req.body.id_record)]).then((values) =>{
        return (values[0]);
    })

    var calculateDebt = total_value_result - balance_result
    var date = getToStringDate(getTodaysDate())

    try {
            await Invoce.update( 
                {
                    generation_date: date, 
                    balance: calculateDebt
                },
                {
                where: {id_invoice: id}
            })
            res.json({
                "message": "!Factura actualizada correctamente! abono procesado"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    if(calculateDebt === 0){
        generateInvoice(req.body, date, total_value_result)
    }
}

//genera la factura que se va ha enviar por Email (formato HTML)
//solo le etaria llegando el id_invoid. el date y el pricePlan
//falta que le llege name, last_name, document
//podriamos ver como mostrar el nombre del plan pagado
function generateInvoice(body, date, pricePlan){
    var invoice = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Factura</title>
        <meta charset="UTF-8">
    </head>
    <body>
        
        <form id="frmFactura">
            <div id="cabeceraFactura">
               
           <label id="lbl">N Factura</label>
           <label>${body.id_invoice} </label>
          <input type="text" id="txtnumfact" value="FAC-000001"/>
            <br>
            
            <label id="lbl">Nombre</label>
            <label>${body.name} ${body.last_name} </label>
           <input type="text" id="txtnomcli" />
            <br>
            <label id="lbl">Documento</label>
            <label id="lbl">${body.document}</label>
           <br>
           <label id="lbl">Fecha:</label>
           <label id="lbl">${date}</label>
            </div>
            <br>
            <br>
            <H2>GRACIAS POR ENTRENAR CON XTRAME</H2>
                <table id ="detalle" border="2" width="3" cellspacing="2" cellpadding="1">
            <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Valor </th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input class="descrip" type='text' id='txtDescrip11' value='NOMBRE PLAN'/><br></td>
                        <td><input class="vunit" type='number' id='txtValUni11' min="0.1" step="0.01" value="${pricePlan}/><br></td>

                        <td><input class="totPro" type='number' id='txtTotalPro11' value='0' disabled="" value=${pricePlan} /><br></td>
                    </tr>
                </tbody>
                <br>
                <br>
            </table> 
        </form>
    </body>
</html>
    `
    return invoice
}

function getToStringDate(dateTime){
    return dateTime.getFullYear()+"-"+(dateTime.getMonth()+1)+"-"+dateTime.getDate();
}

function getTodaysDate() {
    var dateTime = new Date();
    return dateTime;
}
module.exports={createInvoice, updateInvoice}