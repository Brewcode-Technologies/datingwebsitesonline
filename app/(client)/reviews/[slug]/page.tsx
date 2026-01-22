'use client';

import { notFound } from 'next/navigation';
import ReviewHero from '../../../../components/ReviewHero';
import ReviewDetails from '../../../../components/ReviewDetails';
import TrustpilotReviews from '../../../../components/TrustpilotReviews';

interface ReviewPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'seniormatch' },
    { slug: 'grindr' },
    { slug: 'her' },
    { slug: 'match' },
    { slug: 'eharmony' },
  ];
}

const ReviewPage = async ({ params }: ReviewPageProps) => {
  const { slug } = await params;

  // Basic review data - you can move this to a database later
  const reviews = {
    seniormatch: {
      name: 'SeniorMatch',
      score: '8.3',
      category: 'Senior Dating',
      description: 'Largest senior dating community for singles over 50',
      highlights: [
        { title: "Price", value: "From $29.95/month" },
        { title: "Number of Members", value: "1.3 million" },
        { title: "Recommended Age", value: "50+" },
      ],
      worthItTitle: "Is SeniorMatch Worth Your Time?",
      worthItDescription: "SeniorMatch is designed specifically for mature singles over 50 looking for companionship, friendship, or love. With verified profiles and age-focused matching.",
      pros: ["Age-verified community", "Senior-focused features", "Safe and secure platform"],
      cons: ["Smaller user base", "Limited free features", "Higher price point"],
      overallScore: "8.3",
      scores: [
        { title: "Sign Up Process", desc: "Simple age verification", score: "8.0" },
        { title: "Matchmaking", desc: "Age-based matching", score: "8.5" },
        { title: "Free Services", desc: "Basic browsing only", score: "7.0" },
        { title: "Features", desc: "Senior-focused tools", score: "8.0" },
        { title: "Security", desc: "Strong age verification", score: "9.0" },
      ],
      trustpilot: {
        overallRating: "Good",
        totalReviews: 856,
        starRating: 4,
        breakdown: [
          { label: 'Excellent', value: 45 },
          { label: 'Great', value: 25 },
          { label: 'Average', value: 15 },
          { label: 'Poor', value: 10 },
          { label: 'Bad', value: 5 },
        ],
        reviews: [
          {
            name: 'Mary S',
            initial: 'MS',
            stars: 5,
            date: '2 months ago',
            title: 'Great for seniors',
            text: 'Finally found a dating site that understands mature dating. Met wonderful people here.',
          },
          {
            name: 'Robert K',
            initial: 'RK',
            stars: 4,
            date: '3 months ago',
            title: 'Good experience',
            text: 'Easy to use and age-appropriate matches. Worth the subscription.',
          },
          {
            name: 'Linda M',
            initial: 'LM',
            stars: 5,
            date: '1 month ago',
            title: 'Highly recommend',
            text: 'Safe environment for seniors. Great customer service.',
          },
        ],
      },
    },
    grindr: {
      name: 'Grindr',
      score: '8.7',
      category: 'Gay Dating',
      description: 'Popular gay dating and social app',
      highlights: [
        { title: "Price", value: "Free with premium options" },
        { title: "Number of Members", value: "27 million" },
        { title: "Recommended Age", value: "18+" },
      ],
      worthItTitle: "Is Grindr Worth Your Time?",
      worthItDescription: "Grindr is the world's largest social networking app for gay, bi, trans, and queer people. Connect with like-minded individuals nearby.",
      pros: ["Large LGBTQ+ community", "Location-based matching", "Free to use"],
      cons: ["Hookup-focused culture", "Privacy concerns", "Limited relationship features"],
      overallScore: "8.7",
      scores: [
        { title: "Sign Up Process", desc: "Quick and easy", score: "9.0" },
        { title: "Matchmaking", desc: "Location-based", score: "8.5" },
        { title: "Free Services", desc: "Full access available", score: "9.0" },
        { title: "Features", desc: "Chat, photos, location", score: "8.5" },
        { title: "Security", desc: "Basic privacy controls", score: "7.5" },
      ],
      trustpilot: {
        overallRating: "Great",
        totalReviews: 2847,
        starRating: 4,
        breakdown: [
          { label: 'Excellent', value: 52 },
          { label: 'Great', value: 28 },
          { label: 'Average', value: 12 },
          { label: 'Poor', value: 5 },
          { label: 'Bad', value: 3 },
        ],
        reviews: [
          {
            name: 'Alex M',
            initial: 'AM',
            stars: 5,
            date: '1 week ago',
            title: 'Perfect for gay dating',
            text: 'Easy to find people nearby. Great community and features.',
          },
          {
            name: 'Jordan P',
            initial: 'JP',
            stars: 4,
            date: '2 weeks ago',
            title: 'Good app overall',
            text: 'Works well for meeting people. Some premium features are worth it.',
          },
          {
            name: 'Sam R',
            initial: 'SR',
            stars: 5,
            date: '3 weeks ago',
            title: 'Love it',
            text: 'Been using for years. Always reliable and active community.',
          },
        ],
      },
    },
    her: {
      name: 'HER',
      score: '8.9',
      category: 'Lesbian Dating',
      description: 'Dating app for lesbian and queer women',
      highlights: [
        { title: "Price", value: "Free with premium options" },
        { title: "Number of Members", value: "7 million" },
        { title: "Recommended Age", value: "18+" },
      ],
      worthItTitle: "Is HER Worth Your Time?",
      worthItDescription: "HER is designed by and for lesbian, bisexual, and queer women. It combines dating with community features and events.",
      pros: ["Women-only community", "Events and groups", "Inclusive environment"],
      cons: ["Smaller user base", "Limited free messaging", "App-only platform"],
      overallScore: "8.9",
      scores: [
        { title: "Sign Up Process", desc: "Detailed profile setup", score: "8.5" },
        { title: "Matchmaking", desc: "Community-focused", score: "9.0" },
        { title: "Free Services", desc: "Browse and like", score: "8.0" },
        { title: "Features", desc: "Events, groups, chat", score: "9.5" },
        { title: "Security", desc: "Women-verified space", score: "9.0" },
      ],
      trustpilot: {
        overallRating: "Excellent",
        totalReviews: 1523,
        starRating: 5,
        breakdown: [
          { label: 'Excellent', value: 68 },
          { label: 'Great', value: 22 },
          { label: 'Average', value: 7 },
          { label: 'Poor', value: 2 },
          { label: 'Bad', value: 1 },
        ],
        reviews: [
          {
            name: 'Sarah J',
            initial: 'SJ',
            stars: 5,
            date: '5 days ago',
            title: 'Amazing community',
            text: 'Love the events and community features. Met my girlfriend through a local event.',
          },
          {
            name: 'Emma K',
            initial: 'EK',
            stars: 5,
            date: '1 week ago',
            title: 'Safe space for women',
            text: 'Finally a dating app that feels safe and inclusive. Great for queer women.',
          },
          {
            name: 'Riley T',
            initial: 'RT',
            stars: 4,
            date: '2 weeks ago',
            title: 'Good features',
            text: 'Love the community aspect. Events are great for meeting people in person.',
          },
        ],
      },
    },
    match: {
      name: 'Match',
      score: '8.4',
      category: 'Mainstream Dating',
      description: 'One of the oldest and most established dating platforms',
      highlights: [
        { title: "Price", value: "From $17.49/month" },
        { title: "Number of Members", value: "21.5 million" },
        { title: "Recommended Age", value: "18+" },
      ],
      worthItTitle: "Is Match Worth Your Time?",
      worthItDescription: "Match is one of the longest-running dating platforms and continues to help people from all walks of life find meaningful relationships. Its compatibility-focused system connects users based on preferences, lifestyle, and long-term goals.",
      pros: ["Highly compatible matches", "Strong success rate for serious relationships", "Advanced search & matchmaking tools"],
      cons: ["Less popular among younger users", "Limited features on free plan", "No direct phone support"],
      overallScore: "8.4",
      scores: [
        { title: "Sign Up Process", desc: "Quick but detailed profile setup", score: "9.0" },
        { title: "Matchmaking", desc: "Daily matches and smart filters", score: "10.0" },
        { title: "Free Services", desc: "Browse, like, limited messaging", score: "7.0" },
        { title: "Features", desc: "Live events, winks, discovery tools", score: "8.5" },
        { title: "Security", desc: "Strong privacy and account protection", score: "9.0" },
      ],
      trustpilot: {
        overallRating: "Bad",
        totalReviews: 1311,
        starRating: 1,
        breakdown: [
          { label: 'Excellent', value: 2 },
          { label: 'Great', value: 1 },
          { label: 'Average', value: 1 },
          { label: 'Poor', value: 5 },
          { label: 'Bad', value: 91 },
        ],
        reviews: [
          {
            name: 'David gg',
            initial: 'DG',
            stars: 1,
            date: '3 years ago',
            title: 'ANOTHER 5 STARS FOR A JOKE…',
            text: 'Another joke website. Very annoying login system and bad user experience after payment.',
          },
          {
            name: 'James Somerville',
            initial: 'JS',
            stars: 5,
            date: '4 years ago',
            title: 'A nice and easy site to use',
            text: 'Nice and easy to use site. Good value for money. Met my girlfriend here.',
          },
          {
            name: 'Dane W',
            initial: 'DW',
            stars: 3,
            date: '4 years ago',
            title: 'I like this dating app',
            text: 'I like this dating app.',
          },
        ],
      },
    },
    eharmony: {
      name: 'eHarmony',
      score: '8.5',
      category: 'Serious Dating',
      description: 'Premium dating service focused on long-term relationships',
      highlights: [
        { title: "Price", value: "From $17.49/month" },
        { title: "Number of Members", value: "21.5 million" },
        { title: "Recommended Age", value: "18+" },
      ],
      worthItTitle: "Is eHarmony Worth Your Time?",
      worthItDescription: "eHarmony uses a comprehensive compatibility matching system to connect users based on 29 dimensions of compatibility for long-term relationships.",
      pros: ["Highly compatible matches", "Strong success rate for serious relationships", "Advanced search & matchmaking tools"],
      cons: ["Less popular among younger users", "Limited features on free plan", "No direct phone support"],
      overallScore: "8.5",
      scores: [
        { title: "Sign Up Process", desc: "Quick but detailed profile setup", score: "9.0" },
        { title: "Matchmaking", desc: "Daily matches and smart filters", score: "10.0" },
        { title: "Free Services", desc: "Browse, like, limited messaging", score: "7.0" },
        { title: "Features", desc: "Live events, winks, discovery tools", score: "8.5" },
        { title: "Security", desc: "Strong privacy and account protection", score: "9.0" },
      ],
      trustpilot: {
        overallRating: "Bad",
        totalReviews: 1311,
        starRating: 1,
        breakdown: [
          { label: 'Excellent', value: 2 },
          { label: 'Great', value: 1 },
          { label: 'Average', value: 1 },
          { label: 'Poor', value: 5 },
          { label: 'Bad', value: 91 },
        ],
        reviews: [
          {
            name: 'David gg',
            initial: 'DG',
            stars: 5,
            date: '3 years ago',
            title: 'ANOTHER 5 STARS FOR A JOKE…',
            text: 'Another joke website. Very annoying login system and bad user experience after payment.',
          },
          {
            name: 'James Somerville',
            initial: 'JS',
            stars: 5,
            date: '4 years ago',
            title: 'A nice and easy site to use',
            text: 'Nice and easy to use site. Good value for money. Met my girlfriend here.',
          },
          {
            name: 'Dane W',
            initial: 'DW',
            stars: 5,
            date: '4 years ago',
            title: 'I like this dating app',
            text: 'I like this dating app.',
          },
        ],
      },
    },
  };

  const review = reviews[slug as keyof typeof reviews];

  if (!review) {
    notFound();
  }

  return (
    <>
      <ReviewHero
        name={review.name}
        score={review.score}
        category={review.category}
        description={review.description}
      />
      
      <ReviewDetails
        highlights={review.highlights}
        worthItTitle={review.worthItTitle}
        worthItDescription={review.worthItDescription}
        pros={review.pros}
        cons={review.cons}
        overallScore={review.overallScore}
        scores={review.scores}
      />
      <TrustpilotReviews
        siteName={review.name}
        overallRating={review.trustpilot.overallRating}
        totalReviews={review.trustpilot.totalReviews}
        starRating={review.trustpilot.starRating}
        breakdown={review.trustpilot.breakdown}
        reviews={review.trustpilot.reviews}
      />
    </>
  );
};

export default ReviewPage;