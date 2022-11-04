var nodemailer = require('nodemailer');

var sendEmails = async(dataJsonRecords, email, person_name)=>{

  var start_date = dataJsonRecords.start_date_register;
  var end_date = dataJsonRecords.end_date_register;

  var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'notificaciones38GYMSYSPRO@outlook.es',
      pass: 'GYMSYSPRO1@'
    }
  });

  var mailOptions = {
    from: 'notificaciones38GYMSYSPRO@outlook.es',
    to: `${email}`,
    subject: 'Registro completado ✔✔',
    text: `Hola ${person_name}!👻👻, te informamos que se ha realizado tu registro al sistema GYM SYSPRO de manera satisfactoria, 
    recuerda que tu suscripcion se encuentra vigente desde el ${start_date} y hasta el ${end_date}, te esperamos💪💪`
  }

  var sendEmail = transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendEmails
}
