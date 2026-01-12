import Container from './Container';
import Title from './Title';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Cross, Users, Calendar, ArrowRight } from 'lucide-react';

const DatingCategoriesSection = () => {
  const categories = [
    {
      title: 'Singles Dating',
      description:
        'Connect with single people looking for meaningful relationships and companionship.',
      icon: Heart,
      href: '/category/singles-dating',
      color: 'from-pink-500 to-red-500',
      image: '/categories/singles-dating.png',
    },
    {
      title: 'Christian Dating',
      description: 'Find faith-based relationships with people who share your Christian values.',
      icon: Cross,
      href: '/category/christian-dating',
      color: 'from-blue-500 to-purple-500',
      image: '/categories/christian-dating.jpeg',
    },
    {
      title: 'Gay Dating',
      description:
        'Safe and inclusive platform for gay men todatingwebsitesonline and build relationships.',
      icon: Users,
      href: '/category/gay-dating',
      color: 'from-green-500 to-teal-500',
      image: '/categories/gay-dating.jpeg',
    },
    {
      title: 'Lesbian Dating',
      description: 'Dedicated space for lesbian women to connect and find their perfect match.',
      icon: Users,
      href: '/category/lesbian-dating',
      color: 'from-purple-500 to-pink-500',
      image: '/categories/lesbian-dating.png',
    },
    {
      title: 'Senior Dating',
      description: 'Mature dating platform for seniors looking for companionship and love.',
      icon: Calendar,
      href: '/category/senior-dating',
      color: 'from-orange-500 to-red-500',
      image: '/categories/senior-dating.jpg',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <Title className="text-2xl sm:text-3xl md:text-4xl font-bold text-shop_dark_green mb-4">
            Dating Categories We Cover
          </Title>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Sometimes some dating platforms are restricted for certain user base, for example, same
            sex couple. So, before you sign up, check out if you have chosen the correct platform to
            look for your soul mate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-shop_dark_green mb-2 sm:mb-3 group-hover:text-shop_light_green transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{category.description}</p>
                  <div className="flex items-center text-shop_light_green group-hover:text-shop_dark_green transition-colors">
                    <span className="font-medium text-sm sm:text-base">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center px-4">
          <div className="bg-gradient-to-r from-shop_dark_green to-shop_light_green p-6 sm:p-8 rounded-xl text-white">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-red-500 fill-current" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Find Your Perfect Match?</h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Now that you have an idea of what to look for in a dating website, it is time to get
              started on it. So, what are you waiting for? It is time to find your better half, and
              see how great life can be. Good luck on your hunt!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/category/singles-dating"
                className="bg-white text-shop_dark_green px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-sm sm:text-base"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-500 fill-current" />
                Find Your Match Now
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-shop_dark_green transition-colors inline-flex items-center justify-center text-sm sm:text-base"
              >
                Compare Top Dating Sites
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DatingCategoriesSection;
