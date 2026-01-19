'use client';

import { Star, Check, ThumbsUp, ThumbsDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import Image from 'next/image';

const topSites = [
  {
    id: 1,
    name: 'Match',
    logo: '/logo.png',
    rating: 9.9,
    stars: 5,
    label: 'Our Most Popular',
    ratingLabel: 'Exceptional',
    highlight: 'Match with singles based on true compatibility',
    bottomLine: 'Trusted site with millions of users',
    features: [
      { label: 'Pricing', value: 'As low as $19.99' },
      { label: 'Free version', value: 'Yes' },
      { label: 'Age range', value: '25-55' },
    ],
    bullets: ['Millions of couples matched', 'Quick sign up'],
    members: '21.5 million members',
    pros: [
      'Experienced, well-trusted dating site',
      'High-percentage of success stories',
      'Allows up to 26 profile photos',
    ],
    cons: ['30-minute sign-up process', 'More traditional than other sites'],
    description:
      'Match is one of the most popular online dating platforms out there, with millions of users in over 60 countries. This site is a fantastic choice for those seeking serious relationships because profiles include many prompts to learn about users\' personalities, lifestyles, and interests.',
    url: '#',
  },
  {
    id: 2,
    name: 'eharmony',
    logo: '/logo.png',
    rating: 9.1,
    stars: 4.5,
    ratingLabel: 'Excellent',
    highlight: 'Connect with quality people seeking long-term commitment',
    bottomLine: 'A science-based approach to love',
    features: [
      { label: 'Pricing', value: 'As low as $29.95' },
      { label: 'Free version', value: 'Yes' },
      { label: 'Age range', value: '30-50' },
    ],
    bullets: ['More than 10 million users', 'Personality-based matchmaking'],
    members: '2.3M messages sent weekly',
    pros: [
      'Detailed compatibility quizzes',
      'Helpful conversation starters',
      'SecureCall safety feature',
    ],
    cons: ["Users can't search for matches", 'Quizzes demand time and thought'],
    description:
      'eharmony is for daters ready to find love and looking for others who are on the same page. With detailed questionnaires and profiles, compatibility scores, and icebreaker questions, it\'s easy to match with a potential long-term partner and initiate contact.',
    url: '#',
  },
  {
    id: 3,
    name: 'DateMyAge',
    logo: '/logo.png',
    rating: 8.5,
    stars: 4.5,
    ratingLabel: 'Very good',
    highlight: 'Serious dating site for singles 40+ with live video chat',
    bottomLine: 'A vibrant site for the 40-and-up crowd',
    features: [
      { label: 'Pricing', value: '$49.99 per month' },
      { label: 'Free version', value: 'Yes' },
      { label: 'Age range', value: '40+' },
    ],
    bullets: ['Easy-to-navigate site', "Singles in their 40's"],
    members: '1 million+ users',
    pros: [
      'Geared towards older, more mature singles',
      'International user base',
      'No memberships or obligations',
    ],
    cons: [
      'Pricing structure is difficult to grasp at first',
      'Limited filter and search options',
    ],
    description:
      'DateMyAge is an international dating site for middle-aged singles. Its user base spans more than 40 countries across North America, Asia, Europe, and Latin America, meaning the site is full of activity and people from all cultures looking to connect.',
    url: '#',
  },
];

const TopDatingSitesComparison = () => {
  const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'text-yellow-400 fill-yellow-400'
                : i === fullStars && hasHalfStar
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300 fill-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="my-12">
      {/* Top 3 Cards */}
      <div className="bg-gradient-to-br from-shop_light_green/5 to-shop_dark_green/5 rounded-2xl p-6 md:p-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-shop_dark_green text-center mb-8">
          Our Top 3 Online Dating Sites
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {topSites.map((site) => (
            <Card
              key={site.id}
              className="relative hover:shadow-2xl transition-all border-2 hover:border-shop_light_green bg-white"
            >
              {site.label && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-shop_light_green text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg">
                  {site.label}
                </div>
              )}

              <CardContent className="p-6 space-y-4">
                {/* Rank */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-shop_dark_green text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                    {site.id}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-shop_dark_green">{site.rating}</div>
                    <div className="text-xs text-gray-600 font-medium">{site.ratingLabel}</div>
                  </div>
                </div>

                {/* Logo/Name */}
                <div className="text-center py-3">
                  <h3 className="text-2xl font-bold text-shop_dark_green mb-2">{site.name}</h3>
                  {renderStars(site.stars)}
                </div>

                {/* Highlight */}
                <p className="text-sm text-center text-dark-text font-medium min-h-[40px]">
                  {site.bottomLine}
                </p>

                {/* Members */}
                <div className="text-center py-2 bg-shop_light_green/10 rounded-lg">
                  <p className="text-sm font-semibold text-shop_dark_green">{site.members}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 border-t pt-3">
                  {site.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-shop_light_green flex-shrink-0 mt-0.5" />
                      <span className="text-dark-text">
                        <strong>{feature.label}:</strong> {feature.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full bg-shop_light_green hover:bg-shop_dark_green text-white font-semibold py-6 text-base"
                >
                  <Link href={site.url}>
                    Visit Site <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed Comparison */}
      <div className="space-y-8">
        {topSites.map((site, index) => (
          <Card key={site.id} className="overflow-hidden border-2 hover:border-shop_light_green transition-all">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-shop_light_green/10 to-shop_dark_green/10 p-6 border-b">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-shop_dark_green text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {site.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-shop_dark_green">{site.name}</h3>
                      <p className="text-sm text-dark-text">{site.highlight}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-3xl font-bold text-shop_dark_green">{site.rating}</div>
                      {renderStars(site.stars)}
                      <div className="text-xs text-gray-600 font-medium">{site.ratingLabel}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-bold text-shop_dark_green mb-3">
                    {site.name} - Best for finding a variety of relationship styles
                  </h4>
                  <p className="text-dark-text leading-relaxed">{site.description}</p>
                </div>

                {/* Key Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-shop_dark_green mb-3 flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5 text-green-600" /> PROS
                    </h5>
                    <ul className="space-y-2">
                      {site.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-text">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-shop_dark_green mb-3 flex items-center gap-2">
                      <ThumbsDown className="w-5 h-5 text-red-600" /> CONS
                    </h5>
                    <ul className="space-y-2">
                      {site.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5">✕</span>
                          <span className="text-dark-text">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-shop_light_green/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">🔥</span>
                    </div>
                    <div>
                      <p className="font-semibold text-shop_dark_green">{site.name}</p>
                      <p className="text-xs text-dark-text">{site.bottomLine}</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-shop_light_green hover:bg-shop_dark_green text-white font-semibold"
                  >
                    <Link href={site.url}>
                      Visit Site <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center bg-gradient-to-r from-shop_light_green/10 to-shop_dark_green/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-shop_dark_green mb-3">
          It's time to find your match
        </h3>
        <p className="text-dark-text max-w-3xl mx-auto">
          Compare the best dating sites and find your perfect match. Each platform offers unique
          features to help you connect with compatible singles.
        </p>
      </div>
    </div>
  );
};

export default TopDatingSitesComparison;
