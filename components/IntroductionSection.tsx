import Container from "./Container";
import Title from "./Title";
import { Heart, Users, Search } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Title className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-6">
            Welcome to Find Love
          </Title>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you are looking for a partner, then a dating site would be the correct choice for you. However, do you know how to find the best dating site, which will help you to find your better half? Well, for starters, the site should follow some criteria. Let's have a quick look at the deciding factors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <h3 className="text-xl font-semibold text-shop_dark_green mb-2">Find Love</h3>
              <p className="text-gray-600">Connect with compatible partners who share your values and interests.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-shop_dark_green mb-2">Trusted Community</h3>
              <p className="text-gray-600">Join a safe and verified community of genuine people looking for relationships.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-shop_dark_green mb-2">Smart Matching</h3>
              <p className="text-gray-600">Our advanced algorithms help you find the most compatible matches.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroductionSection;