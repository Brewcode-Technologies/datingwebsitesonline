import Container from './Container';
import Title from './Title';
import { Heart, Users, Search, Shield } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        <div className="text-center">
          <Title className="text-4xl md:text-5xl font-bold text-shop_dark_green mb-6">
            Smart comparisons. Better choices.
          </Title>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            With hundreds of dating websites online, finding the right one can feel overwhelming.
            Our comparison platform makes it simple by reviewing, analyzing, and comparing top
            dating sites so you can make a smart, confident decision before joining.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">
                Honest Comparisons
              </h3>
              <p className="text-gray-600 text-lg">
                Clear reviews that show real differences between dating websites.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">
                Right Platform for You
              </h3>
              <p className="text-gray-600 text-lg">
                Find dating sites that match your goals and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">
                Save Time & Avoid Scams
              </h3>
              <p className="text-gray-600 text-lg">
                We shortlist trusted platforms and highlight risky ones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-shop_dark_green mb-3">Safety First</h3>
              <p className="text-gray-600 text-lg">
                Compare verification, privacy, and security features.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;
