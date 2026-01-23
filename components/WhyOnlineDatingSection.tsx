import Container from './Container';
import Title from './Title';
import { Shield, Target, Users, Smartphone, DollarSign, Award } from 'lucide-react';

const WhyOnlineDatingSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Profile verification & safety',
      description: 'How well platforms verify user identities and protect against fake profiles and scams.',
    },
    {
      icon: Target,
      title: 'Match quality & algorithms',
      description: 'Effectiveness of matching systems in connecting compatible users based on preferences.',
    },
    {
      icon: Users,
      title: 'User demographics',
      description: 'Age ranges, locations, relationship goals, and diversity of the user base.',
    },
    {
      icon: Smartphone,
      title: 'App & website usability',
      description: 'User interface design, navigation ease, and overall user experience quality.',
    },
    {
      icon: DollarSign,
      title: 'Pricing & subscriptions',
      description: 'Cost comparison, subscription plans, free features, and overall value for money.',
    },
    {
      icon: Award,
      title: 'Brand reputation & success stories',
      description: 'Platform credibility, user testimonials, and proven track record of successful matches.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <Container>
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-shop_dark_green mb-4">
            Compare Top Dating Websites{' '}
          </Title>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional reviews and comparisons of the best dating platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-shop_light_green to-shop_dark_green rounded-lg flex items-center justify-center mb-4 mx-auto">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-shop_dark_green mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyOnlineDatingSection;
