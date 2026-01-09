import { NextRequest, NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/actions/subscriptionActions";
import { sendMail } from "@/lib/emailService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email presence
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Get client info
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Subscribe to newsletter
    const result = await subscribeToNewsletter({
      email,
      source: "footer",
      ipAddress,
      userAgent,
    });

    // If subscription failed or already subscribed
    if (!result.success) {
      return NextResponse.json(
        {
          error: result.message,
          alreadySubscribed: result.alreadySubscribed || false,
        },
        { status: result.alreadySubscribed ? 200 : 400 }
      );
    }

    // Send welcome email
    const emailResult = await sendMail({
      email,
      subject: "Welcome to FindLove Newsletter! 💕",
      text: `Thank you for subscribing to our newsletter! You're now part of our exclusive dating community.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #063c28;">💕 Welcome to FindLove!</h1>
          <p>Thank you for subscribing to our newsletter!</p>
          <p>You're now part of our exclusive dating community and will receive:</p>
          <ul>
            <li>Dating tips and advice</li>
            <li>Success stories from our community</li>
            <li>Exclusive offers and updates</li>
          </ul>
          <p>Happy dating!</p>
          <p>The FindLove Team</p>
        </div>
      `,
    });

    if (!emailResult.success) {
      console.error("Failed to send welcome email:", emailResult.error);
      // Still return success for subscription even if email fails
    }

    return NextResponse.json(
      {
        message: result.message,
        subscriptionId: result.data?.subscriptionId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
