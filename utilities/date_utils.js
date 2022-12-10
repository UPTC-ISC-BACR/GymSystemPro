const moment = require('moment');

async function getTodaysDate() {
    var now = await moment();
    return then.format('YYYY-MM-DD');
}

async function getFinalDate(timeInMonths) {
    var then = await moment();
    then.add(timeInMonths, 'months');
    return then.format('YYYY-MM-DD');
}


module.exports = {
 getTodaysDate, getFinalDate
}