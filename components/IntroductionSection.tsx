import Container from './Container';
import Title from './Title';
import { Heart, Users, Search } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Title className="text-4xl md:text-5xl font-bold text-shop_dark_green mb-6">
            Find Your Perfect Match Today
          </Title>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Discover meaningful connections with millions of singles worldwide. Start your journey to lasting love with our trusted dating platform.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">Find True Love</h3>
              <p className="text-gray-600 text-lg">
                Connect with compatible partners who share your values and life goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">Verified Profiles</h3>
              <p className="text-gray-600 text-lg">
                Join millions of verified singles in a safe and secure environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">Smart Matching</h3>
              <p className="text-gray-600 text-lg">
                Advanced algorithms connect you with your most compatible matches.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;
