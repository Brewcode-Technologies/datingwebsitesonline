"use client";

import { motion } from "motion/react";
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  HeadphonesIcon,
  BookOpen,
  Search,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
} from "lucide-react";
import Container from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
      color: "text-shop_light_green",
      bgColor: "bg-shop_light_green/10",
      borderColor: "border-shop_light_green",
      action: "Start Chat",
      href: "/contact",
      popular: true,
    },
    {
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      icon: Mail,
      availability: "Always Open",
      responseTime: "< 2 hours",
      color: "text-shop_orange",
      bgColor: "bg-shop_orange/10",
      borderColor: "border-shop_orange",
      action: "Send Email",
      href: "/contact",
      popular: false,
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support representative",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "text-shop_dark_green",
      bgColor: "bg-shop_dark_green/10",
      borderColor: "border-shop_dark_green",
      action: "Call Now",
      phone: "+1 (555) 123-4567",
      popular: false,
    },
  ];

  const supportCategories = [
    {
      title: "Orders & Shipping",
      description: "Track orders, shipping info, and delivery questions",
      icon: "📦",
      topics: [
        "Order status and tracking",
        "Shipping methods and costs",
        "Delivery timeframes",
        "International shipping",
      ],
      href: "/help#orders",
    },
    {
      title: "Returns & Exchanges",
      description: "Return policy, exchanges, and refund information",
      icon: "🔄",
      topics: [
        "Return process and policy",
        "Exchange procedures",
        "Refund timeframes",
        "Return shipping labels",
      ],
      href: "/returns",
    },
    {
      title: "Account & Billing",
      description: "Account management and payment questions",
      icon: "👤",
      topics: [
        "Account settings",
        "Password reset",
        "Payment methods",
        "Billing inquiries",
      ],
      href: "/help#account",
    },
    {
      title: "Product Information",
      description: "Product details, sizing, and specifications",
      icon: "ℹ️",
      topics: [
        "Size guides and fitting",
        "Product specifications",
        "Care instructions",
        "Availability updates",
      ],
      href: "/size-guide",
    },
    {
      title: "Technical Support",
      description: "Website issues and technical difficulties",
      icon: "🔧",
      topics: [
        "Website navigation",
        "Checkout problems",
        "Mobile app issues",
        "Browser compatibility",
      ],
      href: "/help#technical",
    },
    {
      title: "Partnerships",
      description: "Business partnerships and wholesale inquiries",
      icon: "🤝",
      topics: [
        "Wholesale opportunities",
        "Business partnerships",
        "Bulk order discounts",
        "Corporate accounts",
      ],
      href: "/contact",
    },
  ];

  const quickActions = [
    {
      title: "Track Your Order",
      description: "Check the status of your recent purchases",
      icon: Search,
      href: "/track-order",
      color: "bg-shop_light_green",
    },
    {
      title: "Start a Return",
      description: "Begin the return process for your items",
      icon: ArrowRight,
      href: "/returns",
      color: "bg-shop_orange",
    },
    {
      title: "View FAQ",
      description: "Find answers to commonly asked questions",
      icon: BookOpen,
      href: "/faq",
      color: "bg-shop_dark_green",
    },
  ];

  const supportStats = [
    {
      number: "99.9%",
      label: "Customer Satisfaction",
      icon: Star,
    },
    {
      number: "< 2min",
      label: "Average Response Time",
      icon: Clock,
    },
    {
      number: "24/7",
      label: "Support Availability",
      icon: Globe,
    },
    {
      number: "50K+",
      label: "Happy Customers",
      icon: Users,
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
            <HeadphonesIcon className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Customer Support
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're here to help! Get the support you need, when you need it.
              Our dedicated team is ready to assist you with any questions or concerns.
            </p>
            <Badge className="mt-6 bg-white/20 text-white border-white/30">
              24/7 Support Available
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Quick Search */}
      <section className="py-12 -mt-8">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-shop_dark_green mb-2">
                    How can we help you today?
                  </h2>
                  <p className="text-dark-text">
                    Search our knowledge base or choose a support option below
                  </p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search for help topics, orders, or issues..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-shop_light_green rounded-xl"
                  />
                  <Button
                    className="absolute right-2 top-2 bg-shop_light_green hover:bg-shop_dark_green"
                    size="lg"
                  >
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Support Stats */}
      <section className="py-12">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-shop_light_green" />
                      <h3 className="text-2xl font-bold text-shop_dark_green mb-1">
                        {stat.number}
                      </h3>
                      <p className="text-dark-text text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Select the support method that works best for you. We're available
              through multiple channels to ensure you get help quickly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full text-center hover:shadow-xl transition-all group relative ${channel.popular ? 'ring-2 ring-shop_light_green' : ''}`}>
                    {channel.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-shop_light_green text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className={`p-4 ${channel.bgColor} rounded-full w-fit mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${channel.color}`} />
                      </div>
                      <CardTitle className="text-shop_dark_green">
                        {channel.title}
                      </CardTitle>
                      <p className="text-dark-text">{channel.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-shop_light_green" />
                          <span className="text-dark-text">{channel.availability}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-shop_light_green" />
                          <span className="text-dark-text">Response: {channel.responseTime}</span>
                        </div>
                      </div>
                      <Button
                        asChild
                        className={`w-full ${channel.color === 'text-shop_light_green' ? 'bg-shop_light_green hover:bg-shop_dark_green' : channel.color === 'text-shop_orange' ? 'bg-shop_orange hover:bg-shop_orange/80' : 'bg-shop_dark_green hover:bg-shop_btn_dark_green'}`}
                      >
                        <Link href={channel.href || "/contact"}>
                          {channel.action}
                        </Link>
                      </Button>
                      {channel.phone && (
                        <p className="text-xs text-dark-text mt-2">
                          {channel.phone}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Need to do something specific? These quick actions can help you
              get things done faster.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={action.href}>
                    <Card className="hover:shadow-lg transition-all cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 ${action.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-shop_dark_green mb-2">
                          {action.title}
                        </h3>
                        <p className="text-dark-text text-sm">
                          {action.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-shop_dark_green mb-4">
              Browse Help Topics
            </h2>
            <p className="text-lg text-dark-text max-w-3xl mx-auto">
              Find detailed information and answers organized by topic. Click on
              any category to explore related help articles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={category.href}>
                  <Card className="h-full hover:shadow-lg transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{category.icon}</span>
                        <CardTitle className="text-shop_dark_green group-hover:text-shop_light_green transition-colors">
                          {category.title}
                        </CardTitle>
                      </div>
                      <p className="text-dark-text text-sm">
                        {category.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-shop_light_green rounded-full flex-shrink-0" />
                            <span className="text-sm text-dark-text">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-shop_light_green to-shop_dark_green text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Still Need Help?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our friendly support team
                  is standing by to help you resolve any issues and answer your
                  questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-shop_dark_green hover:bg-white/90"
                  >
                    <Link href="/contact">
                      <MessageCircle className="w-5 h-5 mr-2" />
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
                      <BookOpen className="w-5 h-5 mr-2" />
                      View FAQ
                    </Link>
                  </Button>
                </div>
                <Separator className="my-6 bg-white/20" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/80">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Available</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Expert Team</span>
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

export default SupportPage;