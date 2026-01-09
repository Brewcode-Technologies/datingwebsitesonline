'use client';

import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users, ArrowRight, Cross } from 'lucide-react';
import Link from 'next/link';

const ChristianDatingPage = () => {
  const services = [
    {
      title: 'Faith-Based Matching',
      price: '$39.99',
      description: 'Connect with Christian singles who share your values and beliefs',
      rating: 4.9,
      reviews: 203,
    },
    {
      title: 'Christian Dating Guide',
      price: '$24.99',
      description: 'Biblical principles for dating and building godly relationships',
      rating: 4.8,
      reviews: 156,
    },
    {
      title: 'Prayer Partner Matching',
      price: '$19.99',
      description: 'Find someone to share your spiritual journey with',
      rating: 4.7,
      reviews: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-shop_light_bg via-white to-shop_light_pink">
      <Container className="py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-6">
            <Cross className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-shop_dark_green mb-4">Christian Dating</h1>
          <p className="text-lg text-dark-text max-w-2xl mx-auto mb-6">
            Faith-based dating for Christian singles. Build relationships founded on shared values
            and beliefs.
          </p>
          <Badge className="bg-shop_light_green text-white">Age Range: 21-60</Badge>
        </div>

        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 mb-12 shadow-md border border-gray-100/50">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-shop_dark_green mb-6">Christian Dating</h2>
            <p className="text-dark-text mb-6">
              If you follow the Bible closely, you will notice that there are no clear instructions
              on how to find your soul mate. However, you might notice that the way dating or even
              courting happens today is quite different from how it happened in the Biblical age.
              Back then, families of young men and women used to select their partners for them.
              Even today, this practice exists in certain countries, although the common notion is a
              bit different.
            </p>

            <p className="text-dark-text mb-6">
              Nowadays with modern and evolving communities, online dating is a popular option. With
              a large and ever growing database of Christian members, you can meet your partner
              online and check if he/she shares your interests.
            </p>

            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">Religious Dating</h3>
            <p className="text-dark-text mb-6">
              Well, when it comes to religious dating, you might have second thoughts. However, if
              you choose the online dating, you'd be surprised to find a lot of likeminded people.
              Just make sure you make your preferences known before you go out for an offline date.
            </p>

            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">Do I Have Options?</h3>
            <p className="text-dark-text mb-6">
              Contrary to the popular belief, when you are choosing a partner through an online
              dating site, you have many options available. You can scroll through different sites
              and choose the one you prefer. Additionally, you can also go through websites, which
              cater only to the Christian folk. Certain sites like eHarmony also allow you to
              specify denominations. Other websites come with a compatibility score, which you can
              use to check if your preferences match or not.
            </p>

            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">
              What Is The Safest Method?
            </h3>
            <p className="text-dark-text mb-6">
              When it comes to dating, you have to opt for the try and buy option. Even in real
              life, you might come across someone who is good to talk to, but not good enough to be
              chosen as a life partner. The compatibility of your partner and you depends on your
              level of understanding, which you need to figure out after a couple of dates. At the
              end of the day when you understand each other, you'd have lesser problems in life.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-shop_light_green/10 rounded-lg flex items-center justify-center mb-4">
                  <Cross className="w-6 h-6 text-shop_light_green" />
                </div>
                <h3 className="text-lg font-semibold text-shop_dark_green mb-2">{service.title}</h3>
                <p className="text-dark-text text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-shop_dark_green">{service.price}</span>
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
            Find Your Faith-Based Match
          </h2>
          <p className="text-dark-text mb-6 max-w-2xl mx-auto">
            Connect with Christian singles who share your faith and values for meaningful
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-shop_dark_green hover:bg-shop_light_green">
              <Link href="/sign-up">
                <Cross className="w-5 h-5 mr-2" />
                Start Dating Today
              </Link>
            </Button>
            {/* <Button asChild size="lg" variant="outline" className="border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white">
              <Link href="/category">
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Categories
              </Link>
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChristianDatingPage;
