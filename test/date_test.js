const {getToStringDate, getTodaysDate} = require("../controllers/records_controller")

const v = getToStringDate(getTodaysDate())

console.log(v);
console.log(typeof(v));