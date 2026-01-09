"use client";

import { motion } from "motion/react";
import {
  Heart,
  Users,
  Award,
  ShoppingBag,
  Target,
  Globe,
  Zap,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
  const stats = [
    { number: "10K+", label: "Happy Couples", icon: Users },
    { number: "500+", label: "Dating Sites Reviewed", icon: ShoppingBag },
    { number: "50+", label: "Dating Categories", icon: Award },
    { number: "99%", label: "Success Rate", icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: "User First",
      description: "Every decision we make starts with helping users find their perfect match.",
      color: "text-shop_light_green",
    },
    {
      icon: Shield,
      title: "Quality Reviews",
      description: "We ensure every dating platform review meets our high standards.",
      color: "text-shop_dark_green",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving to bring you the latest dating insights and trends.",
      color: "text-shop_orange",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "We don't discriminate - covering dating for all ages, orientations, and preferences.",
      color: "text-shop_light_green",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/images/team/ceo.jpg",
      description: "Dating industry expert with 15+ years in relationship consulting",
    },
    {
      name: "Michael Chen",
      role: "Lead Researcher",
      image: "/images/team/cto.jpg",
      description: "Dating platform analyst specializing in user safety and experience",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      image: "/images/team/design.jpg",
      description: "Relationship expert creating comprehensive dating guides",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-shop_light_bg to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Est. 2025
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About Find Love
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              With an aim to help users make the correct choice between the different types of platforms, service and apps, the team of researchers at Find Love have gone through all the nooks and corners of the dating world.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-shop_light_green" />
                    <h3 className="text-3xl font-bold text-shop_dark_green mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-dark-text font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container className="max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-shop_dark_green mb-6">
                Building the Future of Online Dating
              </h2>
              <p className="text-lg text-dark-text mb-6 leading-relaxed">
                We help users make a better and informed choice by reviewing all the websites available in the dating world. Be it for older couples or for same sex marriage, we don't discriminate, and this attitude helps us to provide you with information, which others might miss.
              </p>
              <p className="text-lg text-dark-text mb-8 leading-relaxed">
                Our team of researchers have gone through all the nooks and corners of the dating world to bring you comprehensive reviews and insights. We believe finding love should be accessible to everyone, regardless of age, orientation, or relationship preferences.
              </p>
              <Button
                asChild
                className="bg-shop_dark_green hover:bg-shop_btn_dark_green"
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Star className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold">Expert Reviews</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold">Safe Dating</p>
                  </div>
                </div>
                <blockquote className="text-lg italic">
                  &quot;Finding love should be accessible to everyone. We&apos;re
                  here to help you make the right choice in your dating journey.&quot;
                </blockquote>
                <p className="mt-4 font-semibold">- Sarah Johnson, Founder</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-shop_light_bg">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-shop_orange/10 text-shop_orange hover:bg-shop_orange/20">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-shop_dark_green mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-dark-text max-w-2xl mx-auto">
              These core values guide everything we do, from platform reviews
              to user guidance and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <value.icon
                      className={`w-12 h-12 mx-auto mb-4 ${value.color} group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-xl font-bold text-shop_dark_green mb-3">
                      {value.title}
                    </h3>
                    <p className="text-dark-text leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-shop_light_green/10 text-shop_dark_green hover:bg-shop_light_green/20">
              Leadership Team
            </Badge>
            <h2 className="text-4xl font-bold text-shop_dark_green mb-4">
              Meet the Minds Behind Find Love
            </h2>
            <p className="text-lg text-dark-text max-w-2xl mx-auto">
              Our passionate team of dating experts working tirelessly to help you
              find the perfect dating platform for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-xl font-bold text-shop_dark_green mb-1">
                      {member.name}
                    </h3>
                    <Badge className="mb-3 bg-shop_orange/10 text-shop_orange border-none">
                      {member.role}
                    </Badge>
                    <p className="text-dark-text text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-shop_dark_green to-shop_light_green text-white">
        <Container className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions regarding the content of our site, feel free to reach out to us. Join thousands who trust Find Love for their dating guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-shop_dark_green hover:bg-white/90"
              >
                <Link href="/category/singles-dating">
                  Start Dating <Heart className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-shop_dark_green hover:bg-white/90"
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
