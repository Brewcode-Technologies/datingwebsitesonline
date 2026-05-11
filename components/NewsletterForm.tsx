"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset message
    setMessage(null);

    // Basic validation
    if (!email.trim()) {
      setMessage({
        type: "error",
        text: "Please enter your email address",
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Using Web3Forms for static site newsletter subscription
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          email: email.trim().toLowerCase(),
          subject: "New Newsletter Subscription",
          from_name: "Newsletter Subscriber",
          message: `New newsletter subscription from: ${email.trim().toLowerCase()}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Thank you for subscribing! You'll receive our latest dating site updates.",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shop_dark_green focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>

      {/* Message Display */}
      {message && (
        <div
          className={`p-3 rounded-lg text-sm flex items-start gap-2 animate-in fade-in slide-in-from-top-2 duration-300 ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : message.type === "info"
              ? "bg-blue-50 text-blue-800 border border-blue-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.type === "success" && (
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
          )}
          {message.type === "error" && (
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          )}
          {message.type === "info" && (
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          )}
          <span className="flex-1">{message.text}</span>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
