// Nodemailer => It is extended package to send mail by our application. 
//  npm i nodemailer
import nodemailer from "nodemailer";



let transporterInfo={
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"shresthasagar7000@gmail.com",
        pass:"igdk jhrt zrjj afba",
        // Instead of using your password, use App Password of google.
        // For this go to google, Search for App Password in security settings.(Always allow two-factor-Authentication)
    },
};

export let sendMail= async (mailInfo)=>{
    try {
        let transporter= nodemailer.createTransport(transporterInfo);
        let info= await transporter.sendMail(mailInfo);
    } catch (error) {
        console.log("error has occurred",error.message);
    }
}