import Container from "./Container";
import Title from "./Title";
import { Clock, Users, Heart, Calendar } from "lucide-react";

const WhyOnlineDatingSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Easy to Find Compatible Partners",
      description: "Advanced matching algorithms help you connect with people who share your interests and values."
    },
    {
      icon: Users,
      title: "Wide and Diverse User Base",
      description: "Access to thousands of profiles from different backgrounds, ages, and locations."
    },
    {
      icon: Clock,
      title: "Saves Time",
      description: "No need to spend hours at bars or events. Find potential matches from the comfort of your home."
    },
    {
      icon: Calendar,
      title: "Suitable for All Age Groups",
      description: "Whether you're in your 20s or 60s, online dating platforms cater to every age group."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <Container>
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-4">
            Why Choose Online Dating?
          </Title>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages of finding love online and why millions of people choose digital platforms to meet their perfect match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-shop_dark_green mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyOnlineDatingSection;