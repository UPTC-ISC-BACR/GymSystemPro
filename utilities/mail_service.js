var nodemailer = require('nodemailer');

var sendEmails = async()=>{
  var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'notificacionesgymsyspro@outlook.es',
      pass: 'GYMSYSPRO1@'
    }
  });

  var mailOptions = {
    from: 'notificacionesgymsyspro@outlook.es',
    to: 'fosaxil971@hoxds.com,dario.baron@uptc.edu.co',
    subject: 'Registro completado',
    text: 'Hola!, te informamos que se ha realizado tu registro al sistema GYM SYSPRO de manera satisfactoria'
  };

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
