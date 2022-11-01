const {Record} = require('../database/db');
const {sendEmails} = require('..//utilities/mail_service')
const YearsOfSubcription = 1;
const PriceOfSubscription = 100000;

const addRecord = async(document)=>{
    try {
        let records = await Record.create(createDataJson(document));
        sendEmails();
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

function createDataJson(document) {
    const jsonRecord ={
        id_record:document,
        document: document,
        start_date_register:getToStringDate(getTodaysDate()),
        end_date_register: getToStringDate(getFinalRegistrationDate()),
        price: PriceOfSubscription
    }
    return jsonRecord;
}

function getTodaysDate() {
    var dateTime = new Date();
    return dateTime;
}

function getFinalRegistrationDate(){
    var finalDate = new Date();
    finalDate.setFullYear(finalDate.getFullYear() + YearsOfSubcription);
    return finalDate;
}

function getToStringDate(dateTime){
    return dateTime.getDate()+"-"+(dateTime.getMonth()+1)+"-"+dateTime.getFullYear();
}

module.exports = {
    addRecord, getRecords
}