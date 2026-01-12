'use client';

import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users, ArrowRight, Flower } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const LesbianDatingPage = () => {
  const services = [
    {
      title: 'Women-Only Platform',
      price: '$32.99',
      description: 'Exclusive platform designed for lesbian women to connect safely',
      rating: 4.9,
      reviews: 192,
    },
    {
      title: 'Relationship Building',
      price: '$69.99',
      description: 'Guidance for building strong, lasting lesbian relationships',
      rating: 4.8,
      reviews: 145,
    },
    {
      title: 'Community Support',
      price: '$18.99',
      description: 'Access to supportive lesbian community groups and events',
      rating: 4.7,
      reviews: 298,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-shop_light_bg via-white to-shop_light_pink">
      <Container className="py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-shop_light_green">
            <Image
              src="/categories/lesbian-dating.jpg"
              alt="Lesbian Dating"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-shop_dark_green mb-4">Lesbian Dating</h1>
          <p className="text-lg text-dark-text max-w-2xl mx-auto mb-6">
            Empowering lesbian women todatingwebsitesonline and build lasting relationships in a
            supportive community.
          </p>
          <Badge className="bg-shop_light_green text-white">Age Range: 18-65</Badge>
        </div>

        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 mb-12 shadow-md border border-gray-100/50">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-shop_dark_green mb-6">Lesbian Dating</h2>
            <p className="text-dark-text mb-6">
              As with any other form of dating, lesbian dating has also become popular over the last
              decade. People have become more accepting, and more and more LGBT people are coming
              forward with their choices. Now, when it comes to online dating, you can be sure that
              the process of letting your choices known has become much easier. With online dating,
              you get to not only meet your soul mate, but also speak to her and know each other
              better. And once you have known each other, you can meet face to face and decide if
              you want to move forward as a couple, or give it a few more months.
            </p>

            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">
              Take the Leap – Join A Lesbian Dating Site
            </h3>
            <p className="text-dark-text mb-6">
              It is the 21st century and our thought processes have become modern. This is why you
              should take the leap and join an online dating platform, which will help you to choose
              your life partner. However, there is only a handful of lesbian dating website online.
              You can always go ahead and search them with a click of the mouse. Additionally, you
              can also look into our reviews of the dating site, and choose the one that is suitable
              for you.
            </p>

            <p className="text-dark-text mb-6">
              All you need to do in order to find a partner is sign up in an exclusive dating site
              and fill in your details. Once you have done that, you can go ahead and look for your
              ideal partner. You can begin your search from the different matched profile. If you
              like the person after talking to her, you can set up an offline date.
            </p>

            <h3 className="text-xl font-semibold text-shop_dark_green mb-4">Dating Tips</h3>
            <p className="text-dark-text mb-6">
              In order to have a partner, whom you can date offline, you need to have a completed
              profile on the dating site. Also, choose people who have filled out their profiles.
              That way, you can be sure that you are meeting the person of your dreams.
            </p>

            <p className="text-dark-text mb-6">
              Now that you have a fair idea of what to expect when you step into the online dating
              world, it is time to start the search of your ideal partner. What's stopping you?
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-shop_light_green/10 rounded-lg flex items-center justify-center mb-4">
                  <Flower className="w-6 h-6 text-shop_light_green" />
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
            Connect with Amazing Women
          </h2>
          <p className="text-dark-text mb-6 max-w-2xl mx-auto">
            Join a vibrant community of lesbian women seeking authentic connections and meaningful
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-shop_dark_green hover:bg-shop_light_green">
              <Link href="/sign-up">
                <Flower className="w-5 h-5 mr-2" />
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

export default LesbianDatingPage;
