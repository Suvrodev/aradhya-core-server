import nodemailer from "nodemailer";

export const sendAssignStudentMail = async (
  name: string,
  email: string,
  course: string
) => {
  console.log("################################");
  console.log("Email: ", email);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "aradhyacore.train@gmail.com",
      pass: "jqaw ntao qtqe afel",
    },
  });

  //Send Mail
  await transporter.sendMail({
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    from: "aradhyacore.train@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Welcome Mail", // Subject line
    text: "Hello Ki Khabor", // plain text body
    html: `
  <p>Hey <b>${name}</b>,</p>
  <p>
    You are successfully assigned for the course: <b>${course}</b>.
  </p>
  <p>
    After checking your <span style="color:#E3106E; font-weight:bold;">bKash payment</span> 
    and <span style="font-weight:bold;">transaction ID</span>, we will provide you access 
    to the course within <b>24 hours</b>.
  </p>
  <p style="margin-top:10px;">
    For any course assignment related issues, please call: 
    <b style="color:#16a34a;">01951912997</b>
  </p>
  <hr>
  <p style="font-size:12px; color:gray;">Powered by AradhyaCore</p>
`, // html body
  });
};
