
const {createTransport} = require("nodemailer")

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({to,subject,text}){
    try{
        await transporter.sendMail({
            to,
            subject,
            text
          });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = sendEmail;
