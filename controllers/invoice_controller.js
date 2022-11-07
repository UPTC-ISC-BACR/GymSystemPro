const {Invoce} = require("../database/db")

const{getToStringDate, getTodaysDate} = require("./plans_records_controller")

const createInvoice = async(req, res) => {
    try {
        await Invoce.create()
    } catch (error) {
        
    }
}

function createInvoice(data){
    let data = {
        generation_date: getToStringDate(getTodaysDate()),
        total_value: data.total_value, //consulta
        balance: data.balance,
        invice_period: data.invice_period,
        id_recod: data.id_recod
    }
}

function getTotalValue(){

}

function getBalance(){

}

