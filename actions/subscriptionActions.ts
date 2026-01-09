"use server";

interface SubscriptionData {
  email: string;
  source?: string;
  ipAddress?: string;
  userAgent?: string;
}

interface SubscriptionResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
  alreadySubscribed?: boolean;
}

// Mock storage for demo purposes - in production, use a real database
const mockSubscriptions = new Set<string>();

/**
 * Subscribe a user to the newsletter
 * Mock implementation for demo purposes
 */
export async function subscribeToNewsletter(
  subscriptionData: SubscriptionData
): Promise<SubscriptionResponse> {
  try {
    const { email } = subscriptionData;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please provide a valid email address",
        error: "Invalid email format",
      };
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if already subscribed
    if (mockSubscriptions.has(normalizedEmail)) {
      return {
        success: false,
        message: "You're already subscribed to our newsletter! Check your inbox for our latest updates.",
        alreadySubscribed: true,
      };
    }

    // Add to mock storage
    mockSubscriptions.add(normalizedEmail);

    return {
      success: true,
      message: "Thank you for subscribing! Check your email for a welcome message.",
      data: {
        subscriptionId: `sub_${Date.now()}`,
        email: normalizedEmail,
      },
    };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Unsubscribe a user from the newsletter
 */
export async function unsubscribeFromNewsletter(
  email: string
): Promise<SubscriptionResponse> {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    
    if (!mockSubscriptions.has(normalizedEmail)) {
      return {
        success: false,
        message: "Email not found in our subscription list",
      };
    }

    mockSubscriptions.delete(normalizedEmail);

    return {
      success: true,
      message: "You have been successfully unsubscribed from our newsletter",
    };
  } catch (error) {
    console.error("Error unsubscribing from newsletter:", error);
    return {
      success: false,
      message: "Failed to unsubscribe. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Check if an email is subscribed
 */
export async function checkSubscriptionStatus(
  email: string
): Promise<{ subscribed: boolean; status?: string }> {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    const subscribed = mockSubscriptions.has(normalizedEmail);
    
    return {
      subscribed,
      status: subscribed ? "active" : "inactive",
    };
  } catch (error) {
    console.error("Error checking subscription status:", error);
    return { subscribed: false };
  }
}
