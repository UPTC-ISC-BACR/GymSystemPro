const {Record} = require('../database/db');
const {sendEmails} = require('..//utilities/mail_service')
const{getTodaysDate, getFinalDate} = require('../utilities/date_utils')
const MonthsOfSubcription = 12;
const PriceOfSubscription = 100000;

const addRecord = async(document, email, person_name)=>{
    try {
        dataJsonRecords = createDataJson(document);
        await Record.create(dataJsonRecords);
        sendEmails(dataJsonRecords, email, person_name);
        return({message: "Factura de registro creada en base de datos"})
    } catch (error) {
        return ({message: error.message})
    }
}

const getRecords = async(req, res)=>{
    try {
        const records = await Record.findAll();
        res.json(records)
    } catch (error) {
        res.json({message: error.message})
    }
    
}

async function createDataJson(document) {
    var first_date = await Promise.all([first_date = getTodaysDate()]).then((values) =>{
        return (values[0]);
     })
     var final_date = await Promise.all([final_date = getFinalDate(MonthsOfSubcription)]).then((values) =>{
        return (values[0]);
     })
    const jsonRecord ={
        document: document,
        start_date_register: first_date,
        end_date_register: final_date,
        price: PriceOfSubscription,
        is_active: true
    }
    return jsonRecord;
}

module.exports = {
    addRecord, getRecords
}