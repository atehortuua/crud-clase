import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config();


export const transporter  = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user : process.env.EMAIL_USER, //artisanfusion3@gmail.com
        pass : process.env.EMAIL_PASS, // ujauqhdijtkwjnae
    },
})


export default transporter;