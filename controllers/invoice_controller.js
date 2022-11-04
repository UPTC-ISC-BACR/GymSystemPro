const {Invoce} = require("../database/db")

const{getToStringDate, getTodaysDate} = require("./plans_records_controller")

const postInvoice = async(req, res) => {
    
}

function createInvoice(data){
    let data = {
        generation_date: getToStringDate(getTodaysDate()),
        total_value: "", //consulta
        balance: "",
        invice_period: "",
        id_recod: data.id_recod
    }
}

function getTotalValue(){

}

function getBalance(){

}

