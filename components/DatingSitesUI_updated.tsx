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
  TfiGlass,
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

const TopDatingCard = ({ logo, score, text, recommended, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block">
    <div className="relative bg-white rounded-lg border shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded">
          <TfiHeart className="inline mr-1 text-white" /> We Recommend
        </span>
      )}

      <div className="flex items-start justify-between">
        <img src={logo} alt="logo" className="h-7 object-contain" />
        <div className="text-right">
          <p className="text-2xl font-bold">{score}</p>
          <StarRating value={4} />
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-3">{text}</p>

      <p className="text-pink-500 text-sm font-medium mt-4 cursor-pointer hover:underline">
        Get Started →
      </p>
    </div>
  </a>
);

/* ---------- MAIN RANK LIST ROW ---------- */

const DatingRow = ({ rank, logo, name, title, points, bullets, url }) => {
  const isAdam4Adam = name === 'Adam4Adam';
  return (
    <div className="bg-white border rounded-xl shadow-sm p-5 flex flex-col md:flex-row gap-5">
      <div className="md:w-2/3">
        <div className="flex justify-start items-start mb-4">
          <img
            src={logo}
            alt={name}
            className={`h-10 object-contain ${isAdam4Adam ? 'bg-gray-600 px-2 py-2 rounded' : ''}`}
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-blue-600 text-sm cursor-pointer">Read Review</p>
          <p className="mt-2 font-medium">{title}</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {bullets.map((b, i) => (
              <li key={i}>✓ {b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:w-1/3 flex md:flex-col items-center md:items-end justify-between">
        <div className="text-right">
          <p className="text-3xl font-bold">{points}</p>
          <StarRating value={5} />
          <p className="text-sm text-gray-600">Exceptional</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold mt-3 inline-block text-center"
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
  <div className="bg-gray-100 border rounded-xl p-4 flex gap-3 items-center">
    <TfiHeart className="text-4xl text-pink-500" />
    <p className="text-sm text-gray-700">
      <span className="text-xl font-bold block">
        {singlesCount} {categoryLabel}
      </span>
      started their love story this month
    </p>
  </div>
);

const ScoreItem = ({ title, icon, description }) => {
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
    <div className="bg-gray-100 border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <TfiStar className="text-xl text-yellow-500" />
        <h4 className="font-semibold">Total Score</h4>
      </div>
      <p className="text-sm text-gray-600 mb-3">
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
  <div className="bg-gray-100 border rounded-xl p-4">
    <h4 className="font-semibold mb-4">Must Reads</h4>

    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3">
          <img
            src={`https://picsum.photos/seed/dating${i}/80/60`}
            alt=""
            className="w-20 h-14 object-cover rounded"
          />
          <div>
            <p className="text-sm font-medium leading-snug">
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
      logo: 'https://dummyimage.com/120x50/000/fff&text=Hinge',
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
      logo: '/categories/logo/eHarmony-logo.svg',
      score: '9.9',
      title: 'Connect with quality people seeking long-term commitment',
      bullets: ['10+ million users', 'Personality-based matchmaking'],
      categories: ['singles', 'christian', 'senior'],
      url: 'https://www.eharmony.com/',
    },
    {
      name: 'Match',
      logo: '/categories/logo/match-logo.webp',
      score: '9.1',
      title: 'Match with singles based on true compatibility',
      bullets: ['Millions of couples matched', 'Quick sign up'],
      categories: ['singles', 'christian', 'senior'],
      url: 'https://www.match.com/',
    },
    {
      name: 'OkCupid',
      logo: 'https://dummyimage.com/120x50/000/fff&text=OkCupid',
      score: '8.8',
      title: 'Dating with detailed profiles and matching',
      bullets: ['Detailed profiles', 'LGBTQ+ friendly'],
      categories: ['singles', 'lesbian'],
      url: 'https://www.okcupid.com/',
    },
    {
      name: 'Plenty of Fish',
      logo: 'https://dummyimage.com/120x50/000/fff&text=POF',
      score: '8.5',
      title: 'Free dating with large user base',
      bullets: ['Free messaging', 'Large community'],
      categories: ['singles', 'lesbian'],
      url: 'https://www.pof.com/',
    },
    {
      name: 'Zoosk',
      logo: '/categories/logo/zoosk-heart-logo.svg',
      score: '8.9',
      title: 'Smart matchmaking dating platform',
      bullets: ['Behavioral matchmaking', 'Photo verification'],
      categories: ['singles', 'gay', 'lesbian'],
      url: 'https://www.zoosk.com/',
    },
    {
      name: 'EliteSingles',
      logo: 'https://dummyimage.com/120x50/000/fff&text=EliteSingles',
      score: '8.4',
      title: 'Premium dating for educated professionals',
      bullets: ['Professional singles', 'Personality matching'],
      categories: ['singles', 'senior'],
      url: 'https://www.elitesingles.com/',
    },

    // Christian Dating - unique to christian only
    {
      name: 'ChristianMingle',
      logo: 'https://dummyimage.com/120x50/000/fff&text=ChristianMingle',
      score: '9.3',
      title: 'Faith-based dating for Christian singles',
      bullets: ['Christian community', 'Values-based matching'],
      categories: ['christian'],
      url: 'https://www.christianmingle.com/',
    },
    {
      name: 'ChristianCafe',
      logo: 'https://dummyimage.com/120x50/000/fff&text=ChristianCafe',
      score: '8.9',
      title: 'Christian dating since 1999',
      bullets: ['Established community', 'Faith-centered'],
      categories: ['christian'],
      url: 'https://www.christiancafe.com/',
    },
    {
      name: 'Christian Connection',
      logo: 'https://dummyimage.com/120x50/000/fff&text=ChristianConnection',
      score: '8.6',
      title: 'UK-based Christian dating platform',
      bullets: ['UK focused', 'Christian values'],
      categories: ['christian'],
      url: 'https://www.christianconnection.com/',
    },
    {
      name: 'CatholicMatch',
      logo: 'https://dummyimage.com/120x50/000/fff&text=CatholicMatch',
      score: '8.4',
      title: 'Catholic singles dating platform',
      bullets: ['Catholic community', 'Faith compatibility'],
      categories: ['christian'],
      url: 'https://www.catholicmatch.com/',
    },
    {
      name: 'CDFF',
      logo: 'https://dummyimage.com/120x50/000/fff&text=CDFF',
      score: '8.1',
      title: 'Christian Dating For Free',
      bullets: ['Completely free', 'Christian focused'],
      categories: ['christian'],
      url: 'https://www.cdff.com/',
    },

    // Gay Dating - unique to gay only
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
      logo: 'https://dummyimage.com/120x50/000/fff&text=Scruff',
      score: '8.4',
      title: 'Gay dating app for bears and masculine men',
      bullets: ['Bear community', 'Travel features'],
      categories: ['gay'],
      url: 'https://www.scruff.com/',
    },
    {
      name: 'ROMEO',
      logo: 'https://dummyimage.com/120x50/000/fff&text=ROMEO',
      score: '8.5',
      title: 'European gay dating platform',
      bullets: ['European focus', 'Community features'],
      categories: ['gay'],
      url: 'https://www.romeo.com/',
    },
    {
      name: 'Jackd',
      logo: 'https://dummyimage.com/120x50/000/fff&text=Jackd',
      score: '8.1',
      title: 'Diverse gay dating community',
      bullets: ['Diverse community', 'Photo sharing'],
      categories: ['gay'],
      url: 'https://getjackd.com/',
    },
    {
      name: 'Hornet',
      logo: 'https://dummyimage.com/120x50/000/fff&text=Hornet',
      score: '8.0',
      title: 'Gay social network and dating',
      bullets: ['Social features', 'Global community'],
      categories: ['gay'],
      url: 'https://hornet.com/',
    },
    {
      name: 'Adam4Adam',
      logo: '/categories/logo/Adam4Adam-logo.svg',
      score: '8.2',
      title: 'Free gay dating and chat platform',
      bullets: ['Free messaging', 'Large user base'],
      categories: ['gay'],
      url: 'https://www.adam4adam.com/',
    },

    // Lesbian Dating - unique to lesbian only
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
      logo: '/categories/logo/pinkcupid_logo.svg',
      score: '8.1',
      title: 'Lesbian dating site for women seeking women',
      bullets: ['Women-focused', 'Worldwide community'],
      categories: ['lesbian'],
      url: 'https://www.pinkcupid.com/',
    },
    {
      name: 'Lesly',
      logo: 'https://dummyimage.com/120x50/000/fff&text=Lesly',
      score: '7.9',
      title: 'Lesbian dating app for women',
      bullets: ['Women only', 'Simple interface'],
      categories: ['lesbian'],
      url: 'https://lesly.com/',
    },
    {
      name: 'Zoe',
      logo: 'https://dummyimage.com/120x50/000/fff&text=Zoe',
      score: '7.8',
      title: 'Lesbian dating by Badoo',
      bullets: ['Badoo powered', 'LGBTQ+ focused'],
      categories: ['lesbian'],
      url: 'https://zoe.lgbt/',
    },
    {
      name: 'Bumble',
      logo: 'https://dummyimage.com/120x50/000/fff&text=Bumble',
      score: '8.3',
      title: 'Women make the first move',
      bullets: ['Women first', 'LGBTQ+ friendly'],
      categories: ['lesbian'],
      url: 'https://bumble.com/',
    },

    // Senior Dating - unique to senior only
    {
      name: 'OurTime',
      logo: 'https://dummyimage.com/120x50/000/fff&text=OurTime',
      score: '8.9',
      title: 'Dating site for singles over 50',
      bullets: ['Mature dating focus', 'Easy to use interface'],
      categories: ['senior'],
      url: 'https://www.ourtime.com/',
    },
    {
      name: 'SilverSingles',
      logo: 'https://dummyimage.com/120x50/000/fff&text=SilverSingles',
      score: '8.5',
      title: 'Premium dating for mature singles',
      bullets: ['50+ community', 'Personality test matching'],
      categories: ['senior'],
      url: 'https://www.silversingles.com/',
    },
    {
      name: 'SeniorMatch',
      logo: 'https://dummyimage.com/120x50/000/fff&text=SeniorMatch',
      score: '8.3',
      title: 'Largest senior dating community',
      bullets: ['Verified profiles', '50+ exclusive'],
      categories: ['senior'],
      url: 'https://www.seniormatch.com/',
    },
    {
      name: 'SeniorPeopleMeet',
      logo: 'https://dummyimage.com/120x50/000/fff&text=SeniorPeopleMeet',
      score: '7.9',
      title: 'Meet local seniors in your area',
      bullets: ['Local connections', 'Simple interface'],
      categories: ['senior'],
      url: 'https://www.seniorpeoplemeet.com/',
    },
    {
      name: 'Lumen',
      logo: 'https://dummyimage.com/120x50/000/fff&text=Lumen',
      score: '8.0',
      title: '50+ focused dating app',
      bullets: ['50+ only', 'Modern interface'],
      categories: ['senior'],
      url: 'https://lumendating.com/',
    },
  ];

  const config = categoryConfig[category];
  const filteredSites = datingSites.filter((site) => site.categories.includes(category));
  const topThreeSites = filteredSites.slice(0, 3);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <div className="relative">
        <img src={config.heroImage} className="w-full h-[500px] object-cover" alt="hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{config.title}</h1>
            <div className="mt-6 text-base md:text-lg">{config.subtitle}</div>
            <p className="mt-6 text-sm bg-black/40 inline-block px-4 py-2 rounded">
              <TfiCheckBox className="inline mr-2 text-green-400" /> Last Updated: Jan 2026
            </p>
          </div>
        </div>
      </div>

      {/* TOP 3 */}
      <div className="bg-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h2 className="font-semibold mb-4">
            Our Top 3{' '}
            {category === 'singles'
              ? 'Online Dating Sites'
              : `${category.charAt(0).toUpperCase() + category.slice(1)} Dating Sites`}
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {topThreeSites.map((site, index) => (
              <TopDatingCard
                key={site.name}
                logo={site.logo}
                score={site.score}
                text={site.bullets[0]}
                recommended={index === 1}
                url={site.url}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">
          {filteredSites.map((site, index) => (
            <DatingRow
              key={site.name}
              rank={(index + 1).toString()}
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
        <div className="space-y-4">
          <SinglesBox singlesCount={config.singlesCount} categoryLabel={config.categoryLabel} />
          <TotalScoreBox category={category} />
          <MustReadsBox />
        </div>
      </div>
    </div>
  );
}
