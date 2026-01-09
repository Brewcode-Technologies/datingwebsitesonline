import Container from "./Container";
import Title from "./Title";
import { Filter, Brain, Zap, MessageCircle, Smile, Monitor } from "lucide-react";

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Well, you are signing up in order to find your life partner. And in order to do that, you would need to scroll through thousands of people's data. There should be some sort of filter to help you choose that."
    },
    {
      icon: Brain,
      title: "Compatibility Tests",
      description: "Features like personality test, or a relationship readiness test, or even a matching test, helps you choose between partners."
    },
    {
      icon: Zap,
      title: "Matching Algorithms",
      description: "Smart algorithms that analyze your preferences and behavior to suggest the most compatible matches."
    },
    {
      icon: MessageCircle,
      title: "Chat & Interactions",
      description: "Secure messaging systems that allow you to communicate safely with potential matches."
    },
    {
      icon: Smile,
      title: "Fun Interactions",
      description: "Moreover, when you have some cool emoticons, you can always send a wink or a love to your online partner, and see how he/she reacts."
    },
    {
      icon: Monitor,
      title: "Ease of Use",
      description: "Admit it or not, no one is going to love a tough to use interface. People are online because they want to meet new people and see how good they are with each other. However, a bad interface dampens the feelings."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <Container>
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-4">
            Key Features to Look For
          </Title>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When choosing a dating platform, make sure it has these essential features to help you find your perfect match effectively and safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-shop_dark_green mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyFeaturesSection;