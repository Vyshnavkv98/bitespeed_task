"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const nodemailer_1 = __importDefault(require("nodemailer"));
(0, dotenv_1.configDotenv)();
const sendMailVerification = async (userName, email) => {
    try {
        const otp = ("" + Math.random()).substring(2, 8);
        console.log('from sentmailverification');
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailOption = {
            from: 'vyshnavkv12345@gmail.com',
            to: email,
            cc: 'vyshnavkvpanalad@gmail.com',
            subject: 'OTP Verification mail',
            text: `hello ${userName} your otp ${otp}`,
        };
        transporter.sendMail(mailOption, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('email has been set' + info.response);
            }
            return otp;
        });
        return otp;
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
};
exports.default = sendMailVerification;
//# sourceMappingURL=sendMailVerification.js.map