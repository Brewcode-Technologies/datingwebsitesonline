"use client";

import { motion } from "motion/react";
import {
  FileText,
  Heart,
  Shield,
  CreditCard,
  Users,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Mail,
  Scale,
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

const TermsPage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  const quickLinks = [
    { icon: Users, title: "User Accounts", href: "#accounts" },
    { icon: Heart, title: "Dating Services", href: "#dating" },
    { icon: CreditCard, title: "Payment Terms", href: "#payment" },
    { icon: Shield, title: "Privacy & Safety", href: "#privacy" },
    { icon: Scale, title: "Legal & Disputes", href: "#legal" },
  ];

  const termsData = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: CheckCircle2,
      content: [
        "By accessing and using FindLove's dating platform and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        "These terms constitute a legally binding agreement between you and FindLove. If you do not agree with any part of these terms, you must not use our dating services.",
        "We may update these terms from time to time. Continued use of our services after changes indicates your acceptance of the modified terms.",
        "These terms apply to all users, including members seeking relationships, premium subscribers, and contributors of content.",
      ],
    },
    {
      id: "accounts",
      title: "User Accounts & Registration",
      icon: Users,
      content: [
        "You must be at least 18 years old to create an account and use our dating services. Age verification may be required.",
        "You agree to provide accurate, current, and complete information during registration and to update your profile as needed.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
        "Creating multiple accounts, fake profiles, or impersonating others is strictly prohibited and will result in immediate account termination.",
      ],
    },
    {
      id: "dating",
      title: "Dating Services & Features",
      icon: Heart,
      content: [
        "Our platform provides various dating services including profile matching, messaging, and relationship coaching to help you find meaningful connections.",
        "Premium features may require subscription payments. All subscription terms and pricing are clearly displayed before purchase.",
        "We do not guarantee that you will find a romantic partner or that any particular outcome will result from using our services.",
        "Success in dating depends on many factors beyond our control, including personal compatibility, communication skills, and individual circumstances.",
      ],
    },
    {
      id: "conduct",
      title: "User Conduct & Community Guidelines",
      icon: AlertCircle,
      content: [
        "You agree to treat all members with respect and courtesy. Harassment, abuse, or discriminatory behavior is strictly prohibited.",
        "Sharing explicit content, soliciting money, or using our platform for commercial purposes without permission is not allowed.",
        "You must not share personal contact information (phone numbers, addresses, social media) in your public profile or initial messages.",
        "Report any suspicious behavior, fake profiles, or safety concerns to our moderation team immediately.",
      ],
    },
    {
      id: "payment",
      title: "Payment & Subscription Terms",
      icon: CreditCard,
      content: [
        "Premium subscriptions are billed in advance and automatically renew unless cancelled before the next billing cycle.",
        "We accept major credit cards and secure payment methods. All payments are processed through encrypted, secure systems.",
        "Refunds are provided according to our refund policy. Premium features remain active until the end of the current billing period after cancellation.",
        "Subscription prices may change with 30 days notice to existing subscribers. New prices apply to new subscriptions immediately.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy & Safety Protection",
      icon: Shield,
      content: [
        "Your privacy and safety are our top priorities. Please review our Privacy Policy to understand how we protect your personal information.",
        "We implement advanced security measures including profile verification, photo authentication, and AI-powered safety monitoring.",
        "You control your profile visibility and can block or report users at any time. We provide tools to help you date safely.",
        "Never share financial information, send money, or meet someone without taking proper safety precautions.",
      ],
    },
    {
      id: "content",
      title: "Content & Intellectual Property",
      icon: FileText,
      content: [
        "You retain ownership of photos and content you upload but grant us license to use them for providing our dating services.",
        "All platform content, algorithms, and matching technology are proprietary to FindLove and protected by intellectual property laws.",
        "You may not copy, reproduce, or distribute our content, member profiles, or proprietary matching algorithms.",
        "Report any copyright infringement or unauthorized use of your content to our support team for immediate action.",
      ],
    },
    {
      id: "legal",
      title: "Legal Terms & Liability",
      icon: Scale,
      content: [
        "These terms are governed by applicable laws. Disputes will be resolved through binding arbitration where permitted by law.",
        "Our liability is limited to the subscription fees paid. We are not liable for actions of other users or outcomes of relationships formed through our platform.",
        "You agree to indemnify FindLove against claims arising from your use of our services or violation of these terms.",
        "We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful behavior toward other members.",
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
            <FileText className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our dating services. They
              outline your rights and responsibilities as a FindLove member.
            </p>
            <Badge className="mt-6 bg-white/20 text-white border-white/30">
              Last updated: {currentDate}
            </Badge>
          </motion.div>
        </Container>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 -mt-8">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-shop_dark_green">
                  Quick Navigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-shop_light_green/5 transition-colors group"
                    >
                      <link.icon className="w-8 h-8 text-shop_light_green mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-center text-shop_dark_green">
                        {link.title}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {termsData.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <AccordionItem
                    value={section.id}
                    className="bg-white rounded-lg shadow-sm border"
                    id={section.id}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <section.icon className="w-6 h-6 text-shop_light_green" />
                        <span className="text-lg font-semibold text-shop_dark_green">
                          {section.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-shop_light_bg/30">
        <Container className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-shop_light_green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-shop_dark_green mb-4">
                  Questions About Our Terms?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service or need
                  clarification on any dating-related policies, our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-shop_dark_green hover:bg-shop_light_green">
                    <Link href="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white">
                    <Link href="/privacy">
                      <Shield className="w-4 h-4 mr-2" />
                      Privacy Policy
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default TermsPage;