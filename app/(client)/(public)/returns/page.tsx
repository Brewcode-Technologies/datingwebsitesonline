"use client";

import { motion } from "motion/react";
import {
  RotateCcw,
  Clock,
  CheckCircle,
  XCircle,
  Package,
  CreditCard,
  AlertTriangle,
  FileText,
  Mail,
  ArrowRight,
  RefreshCw,
  Shield,
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

const ReturnsPage = () => {
  const returnSteps = [
    {
      step: 1,
      title: "Initiate Return",
      description: "Log into your account and select the item you want to return",
      icon: FileText,
      color: "text-shop_dark_green",
      bgColor: "bg-shop_dark_green/10",
    },
    {
      step: 2,
      title: "Print Label",
      description: "Download and print the prepaid return shipping label",
      icon: Package,
      color: "text-shop_light_green",
      bgColor: "bg-shop_light_green/10",
    },
    {
      step: 3,
      title: "Ship Item",
      description: "Package the item securely and drop it off at any authorized location",
      icon: RotateCcw,
      color: "text-shop_orange",
      bgColor: "bg-shop_orange/10",
    },
    {
      step: 4,
      title: "Get Refund",
      description: "Receive your refund within 5-10 business days after we receive the item",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
  ];

  const returnableItems = [
    {
      category: "Returnable Items",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        "Unused items in original packaging",
        "Items with all original tags and labels",
        "Products within 30 days of purchase",
        "Items in resalable condition",
        "Accessories and original documentation included",
      ],
    },
    {
      category: "Non-Returnable Items",
      icon: XCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      items: [
        "Personalized or customized products",
        "Items damaged by misuse or normal wear",
        "Products without original packaging",
        "Items purchased with special discounts (clearance)",
        "Digital products and downloadable content",
      ],
    },
  ];

  const refundTimeline = [
    {
      stage: "Return Initiated",
      time: "Day 1",
      description: "You request a return through your account",
      status: "immediate",
    },
    {
      stage: "Item Shipped",
      time: "Day 1-3",
      description: "You ship the item back to us using our prepaid label",
      status: "customer-action",
    },
    {
      stage: "Item Received",
      time: "Day 5-10",
      description: "We receive and inspect your returned item",
      status: "processing",
    },
    {
      stage: "Refund Processed",
      time: "Day 7-12",
      description: "Refund is issued to your original payment method",
      status: "complete",
    },
    {
      stage: "Refund Received",
      time: "Day 10-17",
      description: "Refund appears in your account (varies by bank)",
      status: "final",
    },
  ];

  const returnPolicies = [
    {
      title: "30-Day Return Window",
      icon: Clock,
      content: [
        "All items can be returned within 30 days of the delivery date.",
        "The return window starts from the day you receive your order.",
        "For gift purchases, the return window starts from the delivery date to the recipient.",
        "Holiday purchases made between November 1st and December 25th can be returned until January 31st.",
      ],
    },
    {
      title: "Return Shipping",
      icon: Package,
      content: [
        "We provide free return shipping labels for all domestic returns.",
        "International returns may require customer to pay return shipping costs.",
        "Original shipping costs are non-refundable unless the item was defective.",
        "Express shipping costs are never refundable for change-of-mind returns.",
      ],
    },
    {
      title: "Refund Methods",
      icon: CreditCard,
      content: [
        "Refunds are issued to the original payment method used for purchase.",
        "Credit card refunds typically take 5-10 business days to appear.",
        "PayPal refunds are usually processed within 3-5 business days.",
        "Store credit can be issued immediately upon request for faster processing.",
      ],
    },
    {
      title: "Exchanges",
      icon: RefreshCw,
      content: [
        "We offer free exchanges for different sizes or colors of the same item.",
        "Exchange requests must be made within the 30-day return window.",
        "New item will be shipped once we receive the original item.",
        "If the new item costs more, you'll be charged the difference.",
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
            <RotateCcw className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Returns & Exchanges
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Not completely satisfied with your purchase? No problem! We offer
              hassle-free returns and exchanges within 30 days.
            </p>
            <Badge className="mt-6 bg-white/20 text-white border-white/30">
              30-Day Money-Back Guarantee
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Return Process Steps */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
              Easy Process
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              How to Return Your Items
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Our simple 4-step return process makes it easy to return any item
              you're not completely satisfied with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all group">
                    <CardHeader>
                      <div className="relative">
                        <div className={`p-4 ${step.bgColor} rounded-full w-fit mx-auto mb-4`}>
                          <Icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-shop_dark_green text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className="text-shop_dark_green text-lg">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-dark-text text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-shop_dark_green hover:bg-shop_btn_dark_green"
            >
              <Link href="/orders">
                Start a Return <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Returnable vs Non-Returnable Items */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_orange/10 text-shop_orange hover:bg-shop_orange/20">
              Return Eligibility
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              What Can Be Returned?
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Before initiating a return, please check if your item is eligible
              for return according to our policy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {returnableItems.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 ${category.bgColor} rounded-lg`}>
                          <Icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <span className="text-shop_dark_green">
                          {category.category}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 ${category.color === 'text-green-600' ? 'bg-green-500' : 'bg-red-500'} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-dark-text text-sm">{item}</span>
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

      {/* Refund Timeline */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Refund Timeline
            </h2>
            <p className="text-lg text-dark-text">
              Here's what to expect during the return and refund process
            </p>
          </motion.div>

          <div className="space-y-6">
            {refundTimeline.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-shop_light_green/10 rounded-full flex items-center justify-center">
                          <span className="text-shop_dark_green font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-shop_dark_green">
                            {stage.stage}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {stage.time}
                          </Badge>
                        </div>
                        <p className="text-dark-text text-sm">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Policies */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Return Policy Details
            </h2>
            <p className="text-lg text-dark-text">
              Complete information about our return and exchange policies
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {returnPolicies.map((policy, index) => (
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
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Need Help with Your Return?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our customer service team is here to help you with any
                  questions about returns, exchanges, or refunds. We're
                  committed to making the process as smooth as possible.
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
                    <Link href="/faq">
                      View FAQ
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-white/70 mt-6">
                  Average response time: Less than 2 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Important Notice */}
      <section className="py-8 border-t border-gray-200">
        <Container className="max-w-4xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-shop_orange" />
              <p className="text-sm text-light-text">
                This return policy was last updated on January 15, 2024
              </p>
            </div>
            <p className="text-xs text-light-text">
              We reserve the right to update this policy. Significant changes
              will be communicated via email.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ReturnsPage;