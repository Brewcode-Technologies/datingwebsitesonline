"use client";

import { motion } from "motion/react";
import {
  Truck,
  Clock,
  MapPin,
  Package,
  Shield,
  CreditCard,
  Globe,
  AlertCircle,
  CheckCircle,
  Calculator,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const ShippingPage = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free",
      time: "5-7 business days",
      description: "Free shipping on orders over $50",
      icon: Package,
      color: "text-shop_dark_green",
      bgColor: "bg-shop_dark_green/10",
      minOrder: "$50",
      features: ["Order tracking", "Insurance included", "Signature not required"],
    },
    {
      name: "Express Shipping",
      price: "$9.99",
      time: "2-3 business days",
      description: "Faster delivery for urgent orders",
      icon: Truck,
      color: "text-shop_light_green",
      bgColor: "bg-shop_light_green/10",
      minOrder: "Any amount",
      features: ["Priority handling", "Order tracking", "Insurance included"],
    },
    {
      name: "Overnight Shipping",
      price: "$19.99",
      time: "1 business day",
      description: "Next day delivery by 6 PM",
      icon: Clock,
      color: "text-shop_orange",
      bgColor: "bg-shop_orange/10",
      minOrder: "Any amount",
      features: ["Next day delivery", "Signature required", "Full insurance"],
    },
  ];

  const internationalZones = [
    {
      zone: "Zone 1 - Canada",
      countries: ["Canada"],
      standardTime: "7-10 business days",
      expressTime: "3-5 business days",
      standardPrice: "$12.99",
      expressPrice: "$24.99",
    },
    {
      zone: "Zone 2 - Europe",
      countries: ["UK", "Germany", "France", "Italy", "Spain", "Netherlands"],
      standardTime: "10-14 business days",
      expressTime: "5-7 business days",
      standardPrice: "$19.99",
      expressPrice: "$39.99",
    },
    {
      zone: "Zone 3 - Asia Pacific",
      countries: ["Australia", "Japan", "South Korea", "Singapore"],
      standardTime: "12-16 business days",
      expressTime: "6-8 business days",
      standardPrice: "$24.99",
      expressPrice: "$49.99",
    },
    {
      zone: "Zone 4 - Rest of World",
      countries: ["Other countries"],
      standardTime: "14-21 business days",
      expressTime: "7-10 business days",
      standardPrice: "$29.99",
      expressPrice: "$59.99",
    },
  ];

  const shippingPolicies = [
    {
      title: "Processing Time",
      icon: Calendar,
      content: [
        "Orders are processed within 1-2 business days after payment confirmation.",
        "Custom or personalized items may require additional 2-3 business days.",
        "Orders placed on weekends or holidays will be processed the next business day.",
        "You'll receive a confirmation email once your order has been shipped.",
      ],
    },
    {
      title: "Shipping Restrictions",
      icon: AlertCircle,
      content: [
        "We currently ship to most countries worldwide with some exceptions.",
        "Certain products may have shipping restrictions due to local regulations.",
        "Hazardous materials and oversized items may require special handling.",
        "Some remote locations may incur additional shipping charges.",
      ],
    },
    {
      title: "Order Tracking",
      icon: MapPin,
      content: [
        "All orders include free tracking with real-time updates.",
        "You'll receive tracking information via email once your order ships.",
        "Track your order anytime through your account dashboard.",
        "SMS notifications available for delivery updates (optional).",
      ],
    },
    {
      title: "Delivery & Signature",
      icon: Shield,
      content: [
        "Standard orders are delivered to your mailbox or safe location.",
        "Express and overnight orders may require signature confirmation.",
        "If you're not home, we'll leave a delivery notice with pickup instructions.",
        "Packages are insured against loss or damage during transit.",
      ],
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
            <Truck className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Shipping Information
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Fast, reliable shipping options to get your orders delivered
              safely and on time. Choose the option that works best for you.
            </p>
            <Badge className="mt-6 bg-white/20 text-white border-white/30">
              Free shipping on orders over $50
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
              Shipping Options
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Choose Your Delivery Speed
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              We offer multiple shipping options to meet your needs, from free
              standard shipping to next-day delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all group relative overflow-hidden">
                    {option.name === "Standard Shipping" && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-shop_light_green text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`p-4 ${option.bgColor} rounded-full w-fit mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${option.color}`} />
                      </div>
                      <CardTitle className="text-shop_dark_green">
                        {option.name}
                      </CardTitle>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-shop_dark_green">
                          {option.price}
                        </div>
                        <div className="text-sm text-dark-text">
                          {option.time}
                        </div>
                        <div className="text-sm text-light-text">
                          Minimum order: {option.minOrder}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-dark-text mb-4 text-center">
                        {option.description}
                      </p>
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-shop_light_green flex-shrink-0" />
                            <span className="text-sm text-dark-text">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* International Shipping */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_orange/10 text-shop_orange hover:bg-shop_orange/20">
              International Shipping
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              We Ship Worldwide
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Enjoy our products no matter where you are. We offer reliable
              international shipping to most countries worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {internationalZones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-shop_dark_green">
                      <Globe className="w-5 h-5 text-shop_light_green" />
                      {zone.zone}
                    </CardTitle>
                    <p className="text-sm text-dark-text">
                      {zone.countries.join(", ")}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-shop_light_bg rounded-lg">
                        <div className="text-sm font-medium text-shop_dark_green mb-1">
                          Standard
                        </div>
                        <div className="text-lg font-bold text-shop_dark_green">
                          {zone.standardPrice}
                        </div>
                        <div className="text-xs text-dark-text">
                          {zone.standardTime}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-shop_light_green/10 rounded-lg">
                        <div className="text-sm font-medium text-shop_dark_green mb-1">
                          Express
                        </div>
                        <div className="text-lg font-bold text-shop_dark_green">
                          {zone.expressPrice}
                        </div>
                        <div className="text-xs text-dark-text">
                          {zone.expressTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <AlertCircle className="w-8 h-8 text-shop_orange mx-auto mb-3" />
                <h3 className="font-semibold text-shop_dark_green mb-2">
                  Important Note
                </h3>
                <p className="text-sm text-dark-text">
                  International orders may be subject to customs duties and taxes
                  imposed by the destination country. These charges are the
                  responsibility of the recipient and are not included in our
                  shipping costs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Shipping Policies */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Shipping Policies & Information
            </h2>
            <p className="text-lg text-dark-text">
              Everything you need to know about our shipping process
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {shippingPolicies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`policy-${index}`}>
                  <Card>
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <policy.icon className="w-5 h-5 text-shop_light_green" />
                        <span className="text-lg font-semibold text-shop_dark_green">
                          {policy.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <Separator className="mb-4" />
                      <ul className="space-y-3">
                        {policy.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full mt-2 flex-shrink-0" />
                            <span className="text-dark-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Calculator className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Need Help Calculating Shipping?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Use our shipping calculator at checkout or contact our support
              team for assistance with international shipping rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-shop_dark_green hover:bg-white/90"
              >
                <Link href="/shop">
                  Start Shopping <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default ShippingPage;