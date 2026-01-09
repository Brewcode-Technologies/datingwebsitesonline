import Container from "./Container";
import Title from "./Title";
import { Shield, Lock, UserCheck, AlertTriangle } from "lucide-react";

const SecurityPrivacySection = () => {
  const securityFeatures = [
    {
      icon: UserCheck,
      title: "Profile Verification",
      description: "Make sure that you check if the platform manually verifies the users or not."
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Check if there was any data breach associated with that website in the past."
    },
    {
      icon: Shield,
      title: "Safe Communication",
      description: "Secure messaging systems that protect your personal information during conversations."
    },
    {
      icon: AlertTriangle,
      title: "Trusted Platforms",
      description: "Choose platforms with strong security measures and positive user reviews."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-4">
            Security & Privacy
          </Title>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            This is by far the most important aspect you should consider when choosing online dating platforms.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
              <span className="text-red-800 font-semibold">Critical Trust Section</span>
            </div>
            <p className="text-red-700">
              While looking for the most suitable online dating platform, make sure that you check if there was any data breach associated with that website. You should also check out if the platform manually verifies the users or not.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-shop_dark_green mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-shop_dark_green to-shop_light_green p-8 rounded-xl text-white text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Your Safety is Our Priority</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We only recommend dating platforms that prioritize user safety, implement strong security measures, and have a proven track record of protecting their members' privacy and data.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SecurityPrivacySection;