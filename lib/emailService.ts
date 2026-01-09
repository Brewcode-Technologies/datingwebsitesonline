import nodemailer from "nodemailer";

interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

interface SendMailParams {
  email: string;
  subject: string;
  text: string;
  html?: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async ({
  email,
  subject,
  text,
  html,
}: SendMailParams): Promise<EmailResponse> => {
  try {
    const mailOptions = {
      from: `"FindLove" <${process.env.SENDER_EMAIL_ADDRESS || "noreply@findlove.com"}>`,
      to: email,
      subject,
      text,
      ...(html && { html }),
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export { sendMail };
export type { EmailResponse, SendMailParams };