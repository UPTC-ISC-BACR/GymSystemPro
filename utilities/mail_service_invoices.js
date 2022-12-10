var nodemailer = require('nodemailer');

var sendEmails = async(dataJsonRecords, email, person_name)=>{

  var start_date = dataJsonRecords.start_date_register;
  var end_date = dataJsonRecords.end_date_register;
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  var mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>',
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
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });
}

module.exports = {
  sendEmails
}
