var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rameshofficial92340@gmail.com',
    pass: 'yzne dyum lmlb xapq'
  }
});

var mailOptions = {
    
  from: 'rameshofficial92340@gmail.com',
  to: 'rameshrathod92340@gmail.com'     ,
  subject: 'all about nodemailer project',
  text: 'That was easy! lets start the concept+',
//   html: '    <h1 style="background-color:blue; font-size:50px; font-weight:bold;  text-align: center;"    >hello there</h1>           <p style="background-color:aqua; font-size:20px; font-weight:bold; "  >we are going to know about nodemailer</p>'
    attachments: [
        {
        filename: 'attachment1.txt',
        content: 'This is the contents of the first attachment.',
        },
        {
        filename: 'sp.png',
        path: './sp.png',
        },

        {
            filename: 'myn.jpg',
            path: './myn.jpg',
            },
        {
            filename:'nodemailer' ,
            path:'./kk.pdf',
        },
    ],
};

transporter.sendMail(mailOptions, function(error,info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});