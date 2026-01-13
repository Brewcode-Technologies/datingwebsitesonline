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

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderConfirmationData {
  customerName: string;
  customerEmail: string;
  orderId: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  estimatedDelivery?: string;
}

const sendOrderConfirmationEmail = async (
  orderData: OrderConfirmationData
): Promise<EmailResponse> => {
  const { customerEmail, customerName, orderId, items, total } = orderData;
  
  const subject = `Order Confirmation - ${orderId}`;
  const text = `Hi ${customerName}, your order ${orderId} for $${total} has been confirmed.`;
  
  const html = `
    <h2>Order Confirmation</h2>
    <p>Hi ${customerName},</p>
    <p>Thank you for your order! Your order ${orderId} has been confirmed.</p>
    <h3>Order Details:</h3>
    <ul>
      ${items.map(item => `<li>${item.name} - Quantity: ${item.quantity} - $${item.price}</li>`).join('')}
    </ul>
    <p><strong>Total: $${total}</strong></p>
  `;
  
  return sendMail({
    email: customerEmail,
    subject,
    text,
    html
  });
};

export { sendMail, sendOrderConfirmationEmail };
export type { EmailResponse, SendMailParams, OrderConfirmationData };