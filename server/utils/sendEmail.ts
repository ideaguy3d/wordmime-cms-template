import * as nodemailer from 'nodemailer';
import { EmailSend, Meta } from '../../models';

export async function sendEmail(data: EmailSend, meta: Meta) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: meta.siteConfigurations.adminEmail, 
            pass: meta.siteConfigurations.adminEmailPassword, 
        },
    });
    let info = await transporter.sendMail({
        from: data.from, 
        to: data.to, 
        subject: data.subject, 
        text: data.text, 
        html: data.html, 
    });
    return info;
}