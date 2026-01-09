"use client";

import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, Users, ArrowRight, Rainbow } from "lucide-react";
import Link from "next/link";

const GayDatingPage = () => {
  const services = [
    {
      title: "Safe Space Matching",
      price: "$34.99",
      description: "Connect with gay men in a safe and inclusive environment",
      rating: 4.8,
      reviews: 178,
    },
    {
      title: "LGBTQ+ Dating Coach",
      price: "$79.99", 
      description: "Specialized coaching for gay men navigating modern dating",
      rating: 4.9,
      reviews: 124,
    },
    {
      title: "Community Events",
      price: "$15.99",
      description: "Join local LGBTQ+ events and meetups in your area",
      rating: 4.7,
      reviews: 267,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-shop_light_bg via-white to-shop_light_pink">
      <Container className="py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-6">
            <Rainbow className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-shop_dark_green mb-4">Gay Dating</h1>
          <p className="text-lg text-dark-text max-w-2xl mx-auto mb-6">
            Safe and inclusive dating platform for gay men. Find love, friendship, and meaningful connections.
          </p>
          <Badge className="bg-shop_light_green text-white">Age Range: 18-65</Badge>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-shop_light_green/10 rounded-lg flex items-center justify-center mb-4">
                  <Rainbow className="w-6 h-6 text-shop_light_green" />
                </div>
                <h3 className="text-lg font-semibold text-shop_dark_green mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-text text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-shop_dark_green">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-dark-text">
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-shop_light_green hover:bg-shop_dark_green">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-shop_light_green/10 to-shop_dark_green/10 rounded-xl p-8 text-center">
          <Users className="w-12 h-12 mx-auto mb-4 text-shop_dark_green" />
          <h2 className="text-2xl font-bold text-shop_dark_green mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-dark-text mb-6 max-w-2xl mx-auto">
            Join a supportive community of gay men looking for genuine connections and lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-shop_dark_green hover:bg-shop_light_green">
              <Link href="/sign-up">
                <Rainbow className="w-5 h-5 mr-2" />
                Start Dating Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white">
              <Link href="/category">
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Categories
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GayDatingPage;