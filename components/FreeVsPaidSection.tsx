import Container from "./Container";
import Title from "./Title";
import { Shield, DollarSign, Users, CheckCircle } from "lucide-react";

const FreeVsPaidSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-4">
            Free vs Paid Dating Sites
          </Title>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Although free dating sites provide you with more opportunity to find a match, the paid dating sites are safer. This is because in a paid dating website, all the members are screened and their identities are checked before they are allowed to have a profile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Free Sites */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Free Dating Sites</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">More options to find matches</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">No financial commitment</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Less safety and verification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">May include non-serious users</span>
              </div>
            </div>
          </div>

          {/* Paid Sites */}
          <div className="bg-gradient-to-br from-shop_light_green/10 to-shop_dark_green/10 p-8 rounded-xl border-2 border-shop_light_green">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-shop_dark_green">Paid Dating Sites</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Verified and screened profiles</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Serious users looking for relationships</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Enhanced security features</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Better matching algorithms</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-shop_dark_green to-shop_light_green p-6 rounded-xl text-white text-center">
          <DollarSign className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Try Before You Pay</h3>
          <p className="text-lg opacity-90">
            Sometimes, you can also find a dating site where you get to try the service before you pay for the subscription. This helps you understand if you should subscribe to that site to find your life partner.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FreeVsPaidSection;