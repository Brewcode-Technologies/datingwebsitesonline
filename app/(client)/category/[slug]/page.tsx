import DatingSitesUI from '@/components/DatingSitesUI';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

type DatingCategory = 'singles' | 'christian' | 'gay' | 'lesbian' | 'senior';

const categoryMap: Record<string, DatingCategory> = {
  'singles-dating': 'singles',
  'christian-dating': 'christian',
  'gay-dating': 'gay',
  'lesbian-dating': 'lesbian',
  'senior-dating': 'senior',
};

export async function generateStaticParams() {
  return [
    { slug: 'singles-dating' },
    { slug: 'christian-dating' },
    { slug: 'gay-dating' },
    { slug: 'lesbian-dating' },
    { slug: 'senior-dating' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMap[slug];
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: "The category you're looking for could not be found.",
    };
  }

  const categoryMeta: Record<DatingCategory, { title: string; description: string; keywords: string[] }> = {
    singles: {
      title: 'Dating Sites for Singles in USA | Free & Safe Online Dating',
      description: 'Find the best online dating sites for singles in the USA. Explore free, safe dating platforms and meet singles near you for real connections.',
      keywords: [
        'best dating sites for singles in usa',
        'free dating sites for singles near me',
        'online dating sites for singles',
        'best online dating for singles',
        'meet singles near me free',
        'safe dating sites for singles',
        'dating site for singles 50',
        'single ladies looking for men',
        'single women near me',
        'single ladies in my area',
        'single women seeking men',
        'singles mingle',
        'meet singles free',
        'singles net',
        'single com',
        'singles dating',
        'beautiful single women',
        'single girls near me',
        'single rich ladies',
        'single dating com',
        'datingwebsitesonline',
      ],
    },
    christian: {
      title: 'Best Christian Dating Sites in USA | Free & Trusted Dating',
      description: 'Explore the best Christian dating sites in the USA. Find free, trusted platforms for serious relationships and connect with Christian singles online.',
      keywords: [
        'best christian dating sites in usa',
        'free christian dating sites usa',
        'christian singles dating sites',
        'christian dating apps free',
        'christian dating for serious relationships',
        'trusted christian dating sites',
        'christian dating',
        'christian singles',
        'faith based dating',
        'christian matchmaking',
        'datingwebsitesonline',
      ],
    },
    gay: {
      title: 'Gay Dating Sites in USA | Free & Safe Gay Dating Apps',
      description: 'Best gay dating sites in the USA with free gay dating apps. Meet gay singles near you and use safe platforms for real connections.',
      keywords: [
        'best gay dating sites in usa',
        'free gay dating apps usa',
        'gay dating sites near me',
        'safe gay dating apps',
        'gay singles near me',
        'online gay dating sites',
        'meet gay men',
        'meet gay men in my area',
        'local gay men',
        'gay dating',
        'gay seniors',
        'married men for married men',
        'older men seeking men',
        'datingwebsitesonline',
      ],
    },
    lesbian: {
      title: 'Lesbian Dating Apps USA | Safe Online Dating Sites & Apps',
      description: 'Lesbian dating sites and apps in the USA. Connect with lesbian singles near you using safe online platforms and modern dating apps.',
      keywords: [
        'best lesbian dating apps usa',
        'free lesbian dating sites',
        'lesbian singles near me',
        'lesbian dating apps free',
        'online lesbian dating sites',
        'safe lesbian dating apps',
        'lesbian dating',
        'woman seeking woman',
        'women searching for men',
        'datingwebsitesonline',
      ],
    },
    senior: {
      title: 'Senior Dating Sites in USA | Free Dating Over 50 & 60',
      description: 'Senior dating sites in USA for singles over 50 and 60. Free senior dating sites, mature dating platforms, and senior dating near you for meaningful connections.',
      keywords: [
        'best senior dating sites in usa',
        'free senior dating sites over 60',
        'senior singles dating sites',
        'dating sites for seniors over 50',
        'mature dating sites free',
        'senior dating near me',
        'meeting older women',
        'my time',
        'mytime dating',
        'seniors dating seniors',
        'older women dating',
        'older women seeking men',
        '50 plus dating sites',
        '50 dating',
        'dating 50 plus',
        'over 50 dating sites',
        'dating website over 50',
        '40 dating',
        'dating for 40 somethings',
        '40 plus singles dating',
        'meet people over 50',
        'older singles dating sites',
        'dating older women',
        'old women looking for men',
        'looking for older women',
        'senior mingle',
        'granny date site',
        '50 and over dating',
        'dating sites for over 60s free',
        '50s dating sites',
        'datingwebsitesonline',
      ],
    },
  };

  const meta = categoryMeta[category];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://datingwebsitesonline.com/category/${slug}`,
    },
    alternates: {
      canonical: `https://datingwebsitesonline.com/category/${slug}`,
    },
  };
}

const CategoryPage = async ({ params }: Props) => {
  const { slug } = await params;
  const category = categoryMap[slug];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for could not be found.</p>
        </div>
      </div>
    );
  }

  return <DatingSitesUI category={category} />;
};

export default CategoryPage;
