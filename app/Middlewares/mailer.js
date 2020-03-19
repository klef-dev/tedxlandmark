const nodemailer = require("nodemailer");
const nhbs = require("nodemailer-express-handlebars");

const transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.mailer_host,
  port: process.env.mailer_port,
  secure: true, // use TLS
  auth: {
    user: process.env.mailer_username,
    pass: process.env.mailer_password
  },
  tls: {rejectUnauthorized: false}
});

const options = {
  viewEngine: {
    extname: ".hbs", // handlebars extension
    layoutsDir: "views/mail/", // location of handlebars templates
    defaultLayout: "main", // name of main template
    partialsDir: "views/mail/" // location of your subtemplates aka. header, footer etc
  },
  viewPath: "views/mail",
  extName: ".hbs"
};
transporter.use("compile", nhbs(options));

exports.transporter = transporter;
