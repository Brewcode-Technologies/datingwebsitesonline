"use client";

import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const SinglesDatingPage = () => {
  const services = [
    {
      title: "Premium Profile Setup",
      price: "$29.99",
      description: "Professional profile creation to attract the right matches",
      rating: 4.8,
      reviews: 156,
    },
    {
      title: "Dating Coach Session",
      price: "$89.99", 
      description: "One-on-one coaching to improve your dating success",
      rating: 4.9,
      reviews: 89,
    },
    {
      title: "Compatibility Test",
      price: "$19.99",
      description: "Find your most compatible matches with our assessment",
      rating: 4.7,
      reviews: 234,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-shop_light_bg via-white to-shop_light_pink">
      <Container className="py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-shop_dark_green mb-4">Singles Dating</h1>
          <p className="text-lg text-dark-text max-w-2xl mx-auto mb-6">
            Find your perfect match with our comprehensive singles dating platform. Connect with like-minded individuals looking for meaningful relationships.
          </p>
          <Badge className="bg-shop_orange text-white">Featured Category</Badge>
        </div>

        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 mb-12 shadow-md border border-gray-100/50">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-shop_dark_green mb-6">Singles Dating</h2>
            <p className="text-dark-text mb-6">
              When it comes to singles dating, you might be confused as to what is different in this case. Well, for starters, singles dating helps you to connect with local singles. That way, both of you can see if you are good enough for each other, and if you are, you can take your relationship ahead. One of the key advantages of single dating is that you get to meet people of your age, and relationship. These people are single and so share the same mentality as you do.
            </p>
            
            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">Is Singles Dating For Me?</h3>
            <p className="text-dark-text mb-6">
              If you are single, then yes, it is definitely for you. At the end of the day, it might seem tough to find a person, who has the same thoughts and same lifestyle as yours, but you should never quit trying. If you are single, and have never been married, then singles dating is definitely for you. On the other hand, even if you are divorced or separated, you can look for a partner in the dating world. However, do decide if you want something casual or something long term, when it comes to choosing partners. This way, you will be able to screen the people who match with you.
            </p>
            
            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">Is Age A Factor?</h3>
            <p className="text-dark-text mb-6">
              To be honest, once you are a bit aged, you might not find a lot of matches. However, considering all the different platforms available, age is not a factor when it comes to online dating. You would get a lot of interested partners and matches, if you fill out your information and look for a partner to spend your life with.
            </p>
            
            <p className="text-dark-text mb-6">
              With online dating you get a plethora of options. Be it religious dating or normal dating, you can choose the type of partners you want, and then check from the matches. So, now that you are prepared, it is time to choose your partner. Go get started!
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-shop_light_green/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-shop_light_green" />
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
            Ready to Find Love?
          </h2>
          <p className="text-dark-text mb-6 max-w-2xl mx-auto">
            Join thousands of singles who have found meaningful relationships through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-shop_dark_green hover:bg-shop_light_green">
              <Link href="/sign-up">
                <Heart className="w-5 h-5 mr-2" />
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

export default SinglesDatingPage;