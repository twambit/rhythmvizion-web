const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const sendEmail = async (name,send_to, subject,message) => {
  const transporter = await nodemailer.createTransport({
    name: process.env.EMAIL_HOST,
    host: process.env.EMAIL_HOST,
    port: "465",
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: send_to,
    to: process.env.EMAIL_USER,
    subject,subject,
    html: `You got a message from
   <div><b>Email</b></div> : ${send_to}
   <div><b>Name</b></div>: ${name}
   <div><b>Message</b></div>: ${message}`,
  };

  // Send Email
  // transporter.sendMail(options, function (err, info) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(info);
  //   }
  // });
  try {
    await transporter.sendMail(options);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = sendEmail;