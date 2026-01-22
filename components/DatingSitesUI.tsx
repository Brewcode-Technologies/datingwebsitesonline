'use client';

import React, { useState } from 'react';
import {
  TfiHeart,
  TfiUser,
  TfiStar,
  TfiBarChart,
  TfiShield,
  TfiSettings,
  TfiBook,
  TfiCheckBox,
  TfiWorld,
  TfiHandPointRight,
  TfiCup,
  TfiHome,
  TfiHandOpen,
  TfiSearch,
  TfiComments,
  TfiFlag,
  TfiCrown,
} from 'react-icons/tfi';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { FcReading } from 'react-icons/fc';

type DatingCategory = 'singles' | 'christian' | 'gay' | 'lesbian' | 'senior';

interface DatingSitesUIProps {
  category?: DatingCategory;
}

interface DatingSite {
  name: string;
  logo: string;
  logoBackground?: string;
  score: string;
  title: string;
  bullets: string[];
  categories: DatingCategory[];
  url: string;
}

interface CategoryConfig {
  title: string;
  subtitle: React.ReactNode;
  heroImage: string;
  singlesCount: string;
  categoryLabel: string;
}

/* =====================
   Reusable Components
===================== */

const StarRating = ({ value = 5 }) => (
  <div className="flex gap-0.5 text-yellow-400 text-sm leading-none">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < value ? '★' : '☆'}</span>
    ))}
  </div>
);

/* ---------- TOP 3 CARDS ---------- */

const TopDatingCard = ({ logo, score, text, recommended, url }: {
  logo: string;
  score: string;
  text: string;
  recommended?: boolean;
  url: string;
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block">
    <div className="relative bg-white rounded-lg border shadow-sm p-2 xs:p-3 sm:p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
      {recommended && (
        <span className="absolute -top-2 xs:-top-3 left-1/2 -translate-x-1/2 bg-green-700 text-white text-[10px] xs:text-xs font-semibold px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded">
          <TfiHeart className="inline mr-0.5 xs:mr-1 text-white" /> We Recommend
        </span>
      )}

      <div className="flex items-start justify-between">
        <img src={logo} alt="logo" className="h-4 xs:h-5 sm:h-7 object-contain" />
        <div className="text-right">
          <p className="text-lg xs:text-xl sm:text-2xl font-bold">{score}</p>
          <StarRating value={4} />
        </div>
      </div>

      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-700 mt-1.5 xs:mt-2 sm:mt-3">{text}</p>

      <p className="text-pink-500 text-[10px] xs:text-xs sm:text-sm font-medium mt-2 xs:mt-3 sm:mt-4 cursor-pointer hover:underline">
        Get Started →
      </p>
    </div>
  </a>
);

/* ---------- MAIN RANK LIST ROW ---------- */

const DatingRow = ({ rank, logo, name, title, points, bullets, url }: {
  rank: string;
  logo: string;
  name: string;
  title: string;
  points: string;
  bullets: string[];
  url: string;
}) => {
  const isAdam4Adam = name === 'Adam4Adam';
  const isCDFF = name === 'CDFF';
  return (
    <div className="bg-white border rounded-xl shadow-sm p-2 xs:p-3 sm:p-5 flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-5">
      <div className="flex-1">
        <div className="flex justify-start items-start mb-2 xs:mb-3 sm:mb-4">
          <img
            src={logo}
            alt={name}
            className={`h-6 xs:h-8 sm:h-10 object-contain ${isAdam4Adam ? 'bg-gray-600 px-1 xs:px-2 py-1 xs:py-2 rounded' : ''} ${isCDFF ? 'bg-black px-1 xs:px-2 py-1 xs:py-2 rounded' : ''}`}
            onError={(e) => {
              e.currentTarget.src = `https://dummyimage.com/120x50/000/fff&text=${name.replace(/\s+/g, '')}`;
            }}
          />
        </div>
        <div>
          <h3 className="font-semibold text-sm xs:text-base sm:text-lg">{name}</h3>
          <p className="mt-1 sm:mt-2 font-medium text-xs xs:text-sm sm:text-base">{title}</p>
          <ul className="mt-1.5 xs:mt-2 space-y-0.5 xs:space-y-1 text-[10px] xs:text-xs sm:text-sm text-gray-600">
            {bullets.map((b, i) => (
              <li key={i}>✓ {b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col items-center justify-between sm:items-end sm:text-right">
        <div className="text-left sm:text-right">
          <p className="text-xl xs:text-2xl sm:text-3xl font-bold">{points}</p>
          <StarRating value={5} />
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600">Exceptional</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-lg font-semibold text-xs xs:text-sm sm:text-base inline-block text-center"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

/* =====================
   SIDEBAR COMPONENTS
===================== */

const SinglesBox = ({
  singlesCount,
  categoryLabel,
}: {
  singlesCount: string;
  categoryLabel: string;
}) => (
  <div className="bg-gray-100 border rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3 items-center">
    <TfiHeart className="text-3xl sm:text-4xl text-pink-500 flex-shrink-0" />
    <p className="text-xs sm:text-sm text-gray-700">
      <span className="text-lg sm:text-xl font-bold block">
        {singlesCount} {categoryLabel}
      </span>
      started their love story this month
    </p>
  </div>
);

const ScoreItem = ({ title, icon, description }: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-sm font-medium"
      >
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
        {open ? (
          <IoChevronUp className="text-gray-500" />
        ) : (
          <IoChevronDown className="text-gray-500" />
        )}
      </button>
      {open && <p className="text-xs text-gray-600 pb-3">{description}</p>}
    </div>
  );
};

const TotalScoreBox = ({ category }: { category: DatingCategory }) => {
  const scoreDescriptions = {
    singles: {
      popularity: 'User base size and active member engagement across general dating platforms.',
      reputation: 'Trust and success rates for mainstream dating sites and apps.',
      features: 'Matching algorithms, messaging tools, and user experience for singles.',
    },
    christian: {
      popularity: 'Active Christian community size and faith-based engagement levels.',
      reputation: 'Trust within Christian communities and successful faith-based relationships.',
      features: 'Biblical compatibility matching, prayer features, and Christian community tools.',
    },
    gay: {
      popularity: 'LGBTQ+ community engagement and active gay male user base.',
      reputation: 'Safety, inclusivity, and success rates within gay dating platforms.',
      features: 'Location-based matching, community events, and LGBTQ+-specific tools.',
    },
    lesbian: {
      popularity: 'Active lesbian and queer women community participation.',
      reputation: 'Women-focused safety measures and successful lesbian relationships.',
      features: 'Women-only spaces, community building tools, and inclusive matching.',
    },
    senior: {
      popularity: 'Mature singles engagement and 50+ community activity levels.',
      reputation: 'Trust and safety for senior dating with verified mature profiles.',
      features: 'Age-appropriate matching, easy interfaces, and companionship focus.',
    },
  };

  const descriptions = scoreDescriptions[category];

  return (
    <div className="bg-gray-100 border rounded-xl p-3 sm:p-4">
      <div className="flex items-center gap-2 mb-2">
        <TfiStar className="text-lg sm:text-xl text-yellow-500" />
        <h4 className="font-semibold text-sm sm:text-base">Total Score</h4>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mb-3">
        Our product scores consist of a combination of the following 3 components:
      </p>
      <ScoreItem
        title="Popularity"
        icon={<TfiBarChart className="text-blue-500" />}
        description={descriptions.popularity}
      />
      <ScoreItem
        title="Brand Reputation"
        icon={<TfiShield className="text-green-500" />}
        description={descriptions.reputation}
      />
      <ScoreItem
        title="Features & Benefits"
        icon={<TfiSettings className="text-purple-500" />}
        description={descriptions.features}
      />
    </div>
  );
};

const MustReadsBox = () => (
  <div className="bg-gray-100 border rounded-xl p-3 sm:p-4">
    <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Must Reads</h4>

    <div className="space-y-3 sm:space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-2 sm:gap-3">
          <img
            src={`https://picsum.photos/seed/dating${i}/80/60`}
            alt=""
            className="w-16 sm:w-20 h-12 sm:h-14 object-cover rounded flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium leading-snug">
              {i === 1 && 'How to Date Without Apps: 10 Effective Ways to Meet People in Real Life'}
              {i === 2 && '10 Great Online Dating Profile Examples to Copy and Paste'}
              {i === 3 && "10 Signs You're in a Situationship and How to Deal With It"}
            </p>
            <p className="text-xs text-pink-500 mt-1 cursor-pointer">Read more</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* =====================
   Main Page
===================== */

export default function DatingSitesUI({ category = 'singles' }: DatingSitesUIProps) {
  const categoryConfig: Record<DatingCategory, CategoryConfig> = {
    singles: {
      title: 'The Best Online Dating Sites of 2026',
      subtitle: (
        <div className="flex items-center gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <TfiWorld className="text-2xl text-blue-400" />
            <span>1. Browse</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiCup className="text-2xl text-green-400" />
            <span>2. Date</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiHeart className="text-2xl text-red-400" />
            <span>3. Fall in love</span>
          </div>
        </div>
      ),
      heroImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      singlesCount: '43,211',
      categoryLabel: 'singles',
    },
    christian: {
      title: 'Best Christian Dating Sites of 2026',
      subtitle: (
        <div className="flex items-center gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <TfiBook className="text-2xl text-blue-400" />
            <span>1. Faith</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiHandOpen className="text-2xl text-green-400" />
            <span>2. Connect</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiHome className="text-2xl text-purple-400" />
            <span>3. Unite in love</span>
          </div>
        </div>
      ),
      heroImage: 'https://images.unsplash.com/photo-1438032005730-c779502df39b',
      singlesCount: '28,456',
      categoryLabel: 'Christians',
    },
    gay: {
      title: 'Best Gay Dating Sites of 2026',
      subtitle: (
        <div className="flex items-center gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <TfiSearch className="text-2xl" />
            <span>1. Discover</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiComments className="text-2xl text-green-400" />
            <span>2. Connect</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiHeart className="text-2xl text-pink-400" />
            <span>3. Find love</span>
          </div>
        </div>
      ),
      heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      singlesCount: '19,832',
      categoryLabel: 'gay men',
    },
    lesbian: {
      title: 'Best Lesbian Dating Sites of 2026',
      subtitle: (
        <div className="flex items-center gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <TfiUser className="text-2xl text-purple-400" />
            <span>1. Meet</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiComments className="text-2xl text-pink-400" />
            <span>2. Chat</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiHeart className="text-2xl text-red-400" />
            <span>3. Fall in love</span>
          </div>
        </div>
      ),
      heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      singlesCount: '15,674',
      categoryLabel: 'lesbian women',
    },
    senior: {
      title: 'Best Senior Dating Sites of 2026',
      subtitle: (
        <div className="flex items-center gap-4 text-base md:text-lg">
          <div className="flex items-center gap-2">
            <TfiSearch className="text-2xl text-blue-400" />
            <span>1. Explore</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiHandOpen className="text-2xl text-green-400" />
            <span>2. Connect</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiCrown className="text-2xl text-yellow-400" />
            <span>3. Find companionship</span>
          </div>
        </div>
      ),
      heroImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54',
      singlesCount: '31,289',
      categoryLabel: 'seniors',
    },
  };

  const datingSites: DatingSite[] = [
    // Singles Dating (General) - unique to singles only
    {
      name: 'Tinder',
      logo: '/categories/logo/singles-dating/tinder-logo.png',
      score: '8.3',
      title: 'Popular swipe-based dating app',
      bullets: ['Easy swiping', 'Large user base'],
      categories: ['singles'],
      url: 'https://tinder.com/',
    },
    {
      name: 'Hinge',
      logo: '/categories/logo/singles-dating/hinge-logo.svg',
      score: '8.7',
      title: 'Designed to be deleted dating app',
      bullets: ['Relationship focused', 'Detailed profiles'],
      categories: ['singles'],
      url: 'https://hinge.co/',
    },
    {
      name: 'Coffee Meets Bagel',
      logo: '/categories/logo/singles-dating/cmb-logo.png',
      score: '8.2',
      title: 'Quality matches delivered daily',
      bullets: ['Curated matches', 'Quality focused'],
      categories: ['singles'],
      url: 'https://coffeemeetsbagel.com/',
    },
    {
      name: 'Badoo',
      logo: '/categories/logo/singles-dating/badoo-logo.png',
      score: '8.0',
      title: 'Meet new people worldwide',
      bullets: ['Global community', 'Video chat'],
      categories: ['singles'],
      url: 'https://badoo.com/',
    },

    // Multi-category sites (appear in multiple categories)
    {
      name: 'eHarmony',
      logo: '/categories/logo/singles-dating/eharmony-logo.svg',
      score: '9.9',
      title: 'Connect with quality people seeking long-term commitment',
      bullets: ['10+ million users', 'Personality-based matchmaking'],
      categories: ['singles'],
      url: 'https://www.eharmony.com/',
    },
    {
      name: 'Match',
      logo: '/categories/logo/singles-dating/match-logo.webp',
      score: '9.1',
      title: 'Match with singles based on true compatibility',
      bullets: ['Millions of couples matched', 'Quick sign up'],
      categories: ['singles'],
      url: 'https://www.match.com/',
    },
    {
      name: 'AmoreDate',
      logo: '/categories/logo/singles-dating/amoredate-logo.svg',
      score: '8.5',
      title: 'Find your perfect match with advanced algorithms',
      bullets: ['Smart matching', 'Verified profiles'],
      categories: ['singles'],
      url: 'https://amoredate.com/land/sp/a4f1221a/?partner=784&subid=504-146905344&ip=124.123.178.53&site=5298&sub1=USdt&sub2=Ig9Qgb9aSE_&sub3=&sub4=&offer_id=504&clickid=171552265&back=#c3RlcDA=',
    },
    {
      name: 'BestDates',
      logo: '/categories/logo/singles-dating/bestdates-logo.svg',
      score: '8.7',
      title: 'Premium dating experience for serious relationships',
      bullets: ['Quality matches', 'Detailed profiles'],
      categories: ['singles'],
      url: 'https://bestdates.com/land/sp/c75606cc/?partner=784&subid=428-146905344&ip=124.123.178.53&site=3617&sub1=USmainstream&sub2=dt_3Z6CfQ82oV_&sub3=&sub4=&offer_id=428&clickid=171552495&back=#c3RlcDE=',
    },
    {
      name: 'Zoosk',
      logo: '/categories/logo/singles-dating/zoosk-logo.svg',
      score: '8.9',
      title: 'Smart matchmaking dating platform',
      bullets: ['Behavioral matchmaking', 'Photo verification'],
      categories: ['singles'],
      url: 'https://www.zoosk.com/',
    },
    {
      name: 'ChristianMingle',
      logo: '/categories/logo/christian-dating/CM_logo.png',
      score: '9.3',
      title: 'Faith-based dating for Christian singles',
      bullets: ['Christian community', 'Values-based matching'],
      categories: ['christian'],
      url: 'https://www.christianmingle.com/',
    },
    {
      name: 'ChristianCafe',
      logo: '/categories/logo/christian-dating/christiancafe-logo.jpg',
      score: '8.9',
      title: 'Christian dating since 1999',
      bullets: ['Established community', 'Faith-centered'],
      categories: ['christian'],
      url: 'https://www.christiancafe.com/',
    },
    {
      name: 'Christian Connection',
      logo: '/categories/logo/christian-dating/christianconnection-logo.jpg',
      score: '8.6',
      title: 'UK-based Christian dating platform',
      bullets: ['UK focused', 'Christian values'],
      categories: ['christian'],
      url: 'https://www.christianconnection.com/',
    },
    {
      name: 'CDFF',
      logo: '/categories/logo/christian-dating/cdff_logo.png',
      score: '8.1',
      title: 'Christian Dating For Free',
      bullets: ['Completely free', 'Christian focused'],
      categories: ['christian'],
      url: 'https://www.cdff.com/',
    },
    {
      name: 'ROMEO (PlanetRomeo)',
      logo: '/categories/logo/gay-dating/rome.svg',
      logoBackground: 'black',
      score: '9.1',
      title: 'European gay dating platform',
      bullets: ['Global gay community', 'Travel-friendly features'],
      categories: ['gay'],
      url: 'https://www.planetromeo.com/',
    },
    {
      name: 'Grindr',
      logo: '/categories/logo/grindr_logo.png',
      score: '8.7',
      title: 'Popular gay dating and social app',
      bullets: ['Location-based matching', 'Active community'],
      categories: ['gay'],
      url: 'https://grindr.com/',
    },
    {
      name: 'Scruff',
      logo: '/categories/logo/gay-dating/scruff-logo.png',
      logoBackground: 'black',
      score: '8.4',
      title: 'Gay dating app for bears and masculine men',
      bullets: ['Bear community', 'Travel features'],
      categories: ['gay'],
      url: 'https://www.scruff.com/',
    },
    {
      name: "Jack'd",
      logo: '/categories/logo/gay-dating/jackd_logo.svg',
      logoBackground: 'black',
      score: '8.3',
      title: 'Diverse gay dating community',
      bullets: ['Diverse user base', 'Photo sharing'],
      categories: ['gay'],
      url: 'https://www.jackdapp.com/',
    },
    {
      name: 'Manhunt',
      logo: '/categories/logo/gay-dating/manhunt_logo.png',
      logoBackground: 'black',
      score: '8.1',
      title: 'Gay dating and hookup platform',
      bullets: ['Established platform', 'Video chat'],
      categories: ['gay'],
      url: 'https://www.manhunt.net/',
    },
    {
      name: 'Hornet',
      logo: '/categories/logo/gay-dating/hornet_logo.svg',
      logoBackground: 'black',
      score: '8.5',
      title: 'Gay social network and dating app',
      bullets: ['Social features', 'Global community'],
      categories: ['gay'],
      url: 'https://hornet.com/',
    },
    {
      name: 'Heesay',
      logo: '/categories/logo/gay-dating/heesay_logo.png',
      score: '8.0',
      title: 'Gay dating and social platform',
      bullets: ['Social features', 'Community focused'],
      categories: ['gay'],
      url: 'https://www.heesay.com/',
    },


    {
      name: 'Lex (LGBTQ+ app)',
      logo: '/categories/logo/gay-dating/lexapp_logo.png',
      score: '8.2',
      title: 'Text-based LGBTQ+ dating platform',
      bullets: ['Text-based profiles', 'Inclusive community'],
      categories: ['gay'],
      url: 'https://www.lexapp.co/',
    },
    {
      name: 'HER',
      logo: '/categories/logo/logoher.svg',
      score: '8.9',
      title: 'Dating app for lesbian and queer women',
      bullets: ['Women-only platform', 'Community events'],
      categories: ['lesbian'],
      url: 'https://weareher.com/',
    },
    {
      name: 'PinkCupid',
      logo: '/categories/logo/pinkcupid_logo.jpg',
      score: '8.1',
      title: 'Lesbian dating site for women seeking women',
      bullets: ['Women-focused', 'Worldwide community'],
      categories: ['lesbian'],
      url: 'https://www.pinkcupid.com/',
    },



    {
      name: 'OkCupid (LGBTQ+ friendly)',
      logo: '/categories/logo/lesbian-dating/okcupid_logo.png',
      score: '8.4',
      title: 'Inclusive dating with detailed profiles',
      bullets: ['LGBTQ+ inclusive', 'Detailed matching'],
      categories: ['lesbian'],
      url: 'https://www.okcupid.com/',
    },
    {
      name: 'Tinder (LGBTQ+ friendly)',
      logo: '/categories/logo/singles-dating/tinder-logo.png',
      score: '8.2',
      title: 'Popular swipe app with LGBTQ+ options',
      bullets: ['Large user base', 'LGBTQ+ friendly'],
      categories: ['lesbian'],
      url: 'https://tinder.com/',
    },
    {
      name: 'Bumble (LGBTQ+ friendly)',
      logo: '/categories/logo/lesbian-dating/bumble_logo.svg',
      score: '8.5',
      title: 'Women-first dating app',
      bullets: ['Women make first move', 'LGBTQ+ inclusive'],
      categories: ['lesbian'],
      url: 'https://bumble.com/',
    },

    {
      name: 'Feeld (inclusive of queer women)',
      logo: '/categories/logo/lesbian-dating/feeled_logo.svg',
      logoBackground: 'black',
      score: '8.1',
      title: 'Open-minded dating for all identities',
      bullets: ['Queer inclusive', 'Alternative relationships'],
      categories: ['lesbian'],
      url: 'https://feeld.co/',
    },

    {
      name: 'SeniorMatch',
      logo: '/categories/logo/senior-dating/seniormatch-logo.png',
      score: '8.5',
      title: 'Premium dating for mature singles',
      bullets: ['50+ community', 'Verified profiles'],
      categories: ['senior'],
      url: 'https://www.seniormatch.com/',
    },

    {
      name: 'DateMyAge',
      logo: '/categories/logo/senior-dating/datemyage.jpg',
      score: '8.1',
      title: 'International mature dating platform',
      bullets: ['40+ community', 'Video chat features'],
      categories: ['senior'],
      url: 'https://www.datemyage.com/',
    },
    {
      name: 'SeniorSizzle',
      logo: '/categories/logo/senior-dating/seniorsizzle-logo.png',
      score: '7.9',
      title: 'Dating site exclusively for seniors 50+',
      bullets: ['Senior-only community', 'Age-verified profiles'],
      categories: ['senior'],
      url: 'https://www.seniorsizzle.com/',
    },
    {
      name: 'Match',
      logo: '/categories/logo/singles-dating/match-logo.webp',
      score: '8.4',
      title: 'Trusted dating for all ages',
      bullets: ['Mature user base', 'Proven success'],
      categories: ['senior'],
      url: 'https://www.match.com/',
    },



  ];

  const config = categoryConfig[category];
  const filteredSites = datingSites.filter((site) => site.categories.includes(category));
  // Sort by score (highest first) and take top 3
  const sortedSites = filteredSites.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  const topThreeSites = sortedSites.slice(0, 3);
  // Remove top 3 from main list to avoid duplication
  const remainingSites = sortedSites.slice(3);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <div className="relative">
        <img src={config.heroImage} className="w-full h-[250px] xs:h-[300px] sm:h-[400px] lg:h-[500px] object-cover" alt="hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 flex items-center">
          <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 text-white">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{config.title}</h1>
            <div className="mt-3 xs:mt-4 sm:mt-6 text-xs xs:text-sm sm:text-base md:text-lg">{config.subtitle}</div>
            <p className="mt-3 xs:mt-4 sm:mt-6 text-[10px] xs:text-xs sm:text-sm bg-black/40 inline-block px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded">
              <TfiCheckBox className="inline mr-1 xs:mr-2 text-green-400" /> Last Updated: Jan 2026
            </p>
          </div>
        </div>
      </div>

      {/* TOP 3 */}
      <div className="bg-gray-200/60">
        <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 py-3 xs:py-4 sm:py-6">
          <h2 className="font-semibold mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base sm:text-lg">
            Our Top 3{' '}
            {category === 'singles'
              ? 'Online Dating Sites'
              : `${category.charAt(0).toUpperCase() + category.slice(1)} Dating Sites`}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-5">
            {topThreeSites.map((site, index) => (
              <TopDatingCard
                key={site.name}
                logo={site.logo}
                score={site.score}
                text={site.bullets[0]}
                recommended={index === 0}
                url={site.url}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 py-4 xs:py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-2 xs:space-y-3 sm:space-y-4">
          {remainingSites.map((site, index) => (
            <DatingRow
              key={site.name}
              rank={(index + 4).toString()}
              logo={site.logo}
              name={site.name}
              title={site.title}
              points={site.score}
              bullets={site.bullets}
              url={site.url}
            />
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-2 xs:space-y-3 sm:space-y-4">
          <SinglesBox singlesCount={config.singlesCount} categoryLabel={config.categoryLabel} />
          <TotalScoreBox category={category} />
          <MustReadsBox />
        </div>
      </div>
    </div>
  );
}
