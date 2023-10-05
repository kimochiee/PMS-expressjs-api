import nodemailerConfig from "../config/nodemailer";
import nodemailer from "nodemailer";

export default async (options) => {
  await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  const mailOptions = {
    from: "Admin <admin@mail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
