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

  const titles = {
    singles: 'Singles Dating',
    christian: 'Christian Dating', 
    gay: 'Gay Dating',
    lesbian: 'Lesbian Dating',
    senior: 'Senior Dating'
  };

  return {
    title: `${titles[category]} - Best Dating Sites 2026`,
    description: `Find the best ${titles[category].toLowerCase()} sites and apps. Compare top platforms and find your perfect match.`,
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
