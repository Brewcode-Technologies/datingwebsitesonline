"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  AlertCircle,
  Mail,
  Phone,
  ArrowRight,
  Eye,
} from "lucide-react";
import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const TrackOrderPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
      // Mock tracking result
      setTrackingResult({
        orderNumber: trackingNumber,
        status: "In Transit",
        estimatedDelivery: "Dec 28, 2024",
        currentLocation: "Distribution Center - New York",
        timeline: [
          {
            status: "Order Placed",
            date: "Dec 20, 2024",
            time: "2:30 PM",
            completed: true,
            description: "Your order has been confirmed and is being prepared.",
          },
          {
            status: "Processing",
            date: "Dec 21, 2024",
            time: "10:15 AM",
            completed: true,
            description: "Order is being packed and prepared for shipment.",
          },
          {
            status: "Shipped",
            date: "Dec 22, 2024",
            time: "4:45 PM",
            completed: true,
            description: "Package has been picked up by carrier and is in transit.",
          },
          {
            status: "In Transit",
            date: "Dec 25, 2024",
            time: "8:20 AM",
            completed: true,
            description: "Package is on its way to the destination facility.",
          },
          {
            status: "Out for Delivery",
            date: "Dec 28, 2024",
            time: "Expected",
            completed: false,
            description: "Package will be delivered today between 9 AM - 6 PM.",
          },
          {
            status: "Delivered",
            date: "Dec 28, 2024",
            time: "Expected",
            completed: false,
            description: "Package will be delivered to your address.",
          },
        ],
      });
    }, 2000);
  };

  const trackingSteps = [
    {
      title: "Enter Order Details",
      description: "Provide your order number and email address",
      icon: Search,
      color: "text-shop_dark_green",
    },
    {
      title: "Get Real-time Updates",
      description: "View current status and location of your package",
      icon: Eye,
      color: "text-shop_light_green",
    },
    {
      title: "Delivery Confirmation",
      description: "Receive notification when your order is delivered",
      icon: CheckCircle,
      color: "text-shop_orange",
    },
  ];

  const helpOptions = [
    {
      title: "Order Issues",
      description: "Problems with your order or delivery",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      action: "Get Help",
      href: "/contact",
    },
    {
      title: "Delivery Questions",
      description: "Questions about delivery times or locations",
      icon: Truck,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      action: "Contact Support",
      href: "/contact",
    },
    {
      title: "Returns & Exchanges",
      description: "Need to return or exchange an item",
      icon: Package,
      color: "text-shop_orange",
      bgColor: "bg-orange-50",
      action: "Start Return",
      href: "/returns",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-shop_light_bg to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Package className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Track Your Order
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated on your order status with real-time tracking
              information. Enter your order details below to get started.
            </p>
            <Badge className="mt-6 bg-white/20 text-white border-white/30">
              Real-time Updates
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Tracking Form */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-shop_dark_green">
                  Enter Your Order Information
                </CardTitle>
                <p className="text-dark-text">
                  We'll show you the current status and location of your package
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleTrackOrder} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tracking" className="text-shop_dark_green font-medium">
                        Order Number *
                      </Label>
                      <Input
                        id="tracking"
                        type="text"
                        placeholder="e.g., ORD-123456789"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        required
                        className="h-12 focus:border-shop_light_green focus:ring-shop_light_green/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-shop_dark_green font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 focus:border-shop_light_green focus:ring-shop_light_green/20"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isTracking || !trackingNumber || !email}
                    className="w-full bg-shop_dark_green hover:bg-shop_light_green h-12 text-lg font-semibold"
                  >
                    {isTracking ? (
                      <>
                        <Search className="w-5 h-5 mr-2 animate-spin" />
                        Tracking Order...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Track My Order
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-shop_light_bg rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-shop_orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-shop_dark_green mb-1">
                        Can't find your order number?
                      </h4>
                      <p className="text-sm text-dark-text">
                        Check your email confirmation or{" "}
                        <Link href="/contact" className="text-shop_light_green hover:underline">
                          contact our support team
                        </Link>{" "}
                        for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Tracking Result */}
      {trackingResult && (
        <section className="py-16 bg-shop_light_bg">
          <Container className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Order Summary */}
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-shop_dark_green">
                      Order #{trackingResult.orderNumber}
                    </CardTitle>
                    <Badge className="bg-shop_light_green text-white">
                      {trackingResult.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-shop_light_green" />
                      <div>
                        <p className="text-sm text-dark-text">Current Location</p>
                        <p className="font-medium text-shop_dark_green">
                          {trackingResult.currentLocation}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-shop_light_green" />
                      <div>
                        <p className="text-sm text-dark-text">Estimated Delivery</p>
                        <p className="font-medium text-shop_dark_green">
                          {trackingResult.estimatedDelivery}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-shop_light_green" />
                      <div>
                        <p className="text-sm text-dark-text">Carrier</p>
                        <p className="font-medium text-shop_dark_green">
                          Express Shipping
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Timeline */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-shop_dark_green">
                    Tracking Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingResult.timeline.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              step.completed
                                ? "bg-shop_light_green text-white"
                                : "bg-gray-200 text-gray-400"
                            }`}
                          >
                            {step.completed ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Clock className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4
                              className={`font-medium ${
                                step.completed
                                  ? "text-shop_dark_green"
                                  : "text-gray-500"
                              }`}
                            >
                              {step.status}
                            </h4>
                            <div className="text-sm text-dark-text">
                              {step.date} • {step.time}
                            </div>
                          </div>
                          <p className="text-sm text-dark-text">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Container>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Simple Order Tracking
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Our tracking system provides real-time updates on your order
              status from confirmation to delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all group">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-shop_light_green/10 rounded-full flex items-center justify-center mx-auto">
                          <Icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-shop_dark_green text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-shop_dark_green mb-2">
                        {step.title}
                      </h3>
                      <p className="text-dark-text text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Need Additional Help?
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Our customer service team is here to assist you with any questions
              or concerns about your order.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {helpOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${option.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-6 h-6 ${option.color}`} />
                      </div>
                      <h3 className="font-semibold text-shop_dark_green mb-2">
                        {option.title}
                      </h3>
                      <p className="text-dark-text text-sm mb-4">
                        {option.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white"
                      >
                        <Link href={option.href}>
                          {option.action}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-shop_light_green to-shop_dark_green text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Still Can't Find Your Order?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Don't worry! Our customer service team is available 24/7 to
                  help you track down your order and resolve any issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-shop_dark_green hover:bg-white/90"
                  >
                    <Link href="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Link href="/help">
                      View Help Center
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default TrackOrderPage;