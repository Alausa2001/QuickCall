/* I will remove the smtp credentials */
// Not working yet
require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendMail(recipients, title, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 465, 
    secure: true,
    auth: {
      user: "alausaabdulqoyum28@gmail.com",
      pass: "B0F391BDAEC1D130B903BC37A39EE3B2C051",
    }
  });

  try {
    await transporter.verify(); 
    const message = {
      from: "alausaabdulqoyum28@gmail.com",
      to: recipients,
      subject: title,
      html: content,
    };
    await transporter.sendMail(message);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error);
  }
}

sendMail("abdulqoyumalausa@gmail.com", "QuickCall New New", "<p>New New QuickCall</p>");
