import Container from '@/components/Container';
import Title from '@/components/Title';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Tag,
  Grid3X3,
  Filter,
  TrendingUp,
  Heart,
  Star,
} from 'lucide-react';
import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Props = {
  params: Promise<{ slug: string }>;
};

// Mock categories data
const mockCategories = [
  {
    _id: '1',
    title: 'Singles Dating',
    slug: { current: 'singles-dating' },
    description:
      'Find your perfect match with our comprehensive singles dating platform. Connect with like-minded individuals looking for meaningful relationships.',
    featured: true,
    range: '18-65',
  },
  {
    _id: '2',
    title: 'Christian Dating',
    slug: { current: 'christian-dating' },
    description:
      'Faith-based dating for Christian singles. Build relationships founded on shared values and beliefs.',
    featured: false,
    range: '21-60',
  },
  {
    _id: '3',
    title: 'Gay Dating',
    slug: { current: 'gay-dating' },
    description:
      'Safe and inclusive dating platform for gay men. Find love, friendship, and meaningful connections.',
    featured: false,
    range: '18-65',
  },
  {
    _id: '4',
    title: 'Lesbian Dating',
    slug: { current: 'lesbian-dating' },
    description:
      'Empowering lesbian women to find love and build lasting relationships in a supportive community.',
    featured: false,
    range: '18-65',
  },
  {
    _id: '5',
    title: 'Senior Dating',
    slug: { current: 'senior-dating' },
    description:
      'Dating for mature singles over 50. Find companionship and love in your golden years.',
    featured: true,
    range: '50+',
  },
];

// Mock products data
const mockProducts = [
  {
    _id: 'p1',
    title: 'Premium Dating Profile Setup',
    price: 29.99,
    description:
      'Professional profile creation service to help you stand out and attract the right matches.',
    rating: 4.8,
    reviews: 156,
  },
  {
    _id: 'p2',
    title: 'Dating Coach Consultation',
    price: 89.99,
    description: 'One-on-one session with certified dating experts to improve your dating success.',
    rating: 4.9,
    reviews: 89,
  },
  {
    _id: 'p3',
    title: 'Relationship Compatibility Test',
    price: 19.99,
    description: 'Comprehensive personality assessment to find your most compatible matches.',
    rating: 4.7,
    reviews: 234,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentCategory = mockCategories.find((cat) => cat.slug.current === slug);

  if (!currentCategory) {
    return {
      title: 'Category Not Found',
      description: "The category you're looking for could not be found.",
    };
  }

  return {
    title: `${currentCategory.title} - Find Love`,
    description: currentCategory.description,
  };
}

const CategoryPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Find the current category
  const currentCategory = mockCategories.find((cat) => cat.slug.current === slug);
  const categoryTitle =
    currentCategory?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  // Get related categories (exclude current category)
  const relatedCategories = mockCategories.filter((cat) => cat.slug.current !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-shop_light_bg via-white to-shop_light_pink">
      <Container className="py-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/category">Categories</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoryTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Category Header Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-md border border-gray-100/50 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left Side - Category Info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-4">
                {/* Category Icon */}
                <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                <div className="flex-1">
                  <Title className="text-2xl lg:text-3xl font-bold text-shop_dark_green mb-2">
                    {categoryTitle}
                  </Title>

                  {/* Category Stats */}
                  <div className="flex items-center gap-4 text-sm text-dark-text mb-3">
                    {currentCategory?.featured && (
                      <div className="flex items-center gap-1 text-shop_orange">
                        <Tag className="w-4 h-4" />
                        <span>Featured Category</span>
                      </div>
                    )}
                    {currentCategory?.range && (
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>Age Range: {currentCategory.range}</span>
                      </div>
                    )}
                  </div>

                  {/* Category Description */}
                  {currentCategory?.description && (
                    <p className="text-dark-text text-sm lg:text-base line-clamp-2">
                      {currentCategory.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* <Link
                  href="/category"
                  className="inline-flex items-center gap-2 text-shop_dark_green hover:text-shop_light_green transition-colors duration-300 text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Categories
                </Link> */}

                {/* <div className="h-4 w-px bg-gray-300" /> */}

                {/* <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-shop_light_green hover:bg-shop_dark_green text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Package className="w-4 h-4" />
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link> */}
              </div>
            </div>

            {/* Right Side - Quick Actions */}
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs text-dark-text bg-white/60 px-3 py-1.5 rounded-full">
                  <Grid3X3 className="w-3 h-3" />
                  <span>Category View</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-dark-text bg-white/60 px-3 py-1.5 rounded-full">
                  <Filter className="w-3 h-3" />
                  <span>{mockProducts.length} Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-shop_dark_green mb-6">Featured Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <Card key={product._id} className="hover:shadow-lg transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-shop_light_green/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-shop_light_green" />
                  </div>
                  <h3 className="text-lg font-semibold text-shop_dark_green mb-2">
                    {product.title}
                  </h3>
                  <p className="text-dark-text text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-shop_dark_green">
                      ${product.price}
                    </span> */}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-dark-text">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-shop_light_green hover:bg-shop_dark_green">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Categories Section */}
        {relatedCategories.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-shop_dark_green">
                Explore Other Categories
              </h3>
              <Link
                href="/category"
                className="text-shop_light_green hover:text-shop_dark_green font-medium text-sm flex items-center gap-1 transition-colors duration-300"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedCategories.map((category) => (
                <Link
                  key={category._id}
                  href={`/category/${category.slug.current}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-shop_light_green p-4 text-center"
                >
                  {/* Category Icon */}
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>

                  {/* Category Title */}
                  <h4 className="text-sm font-medium text-shop_dark_green group-hover:text-shop_light_green transition-colors duration-300 line-clamp-1">
                    {category.title}
                  </h4>

                  {category.featured && (
                    <Badge className="mt-2 bg-shop_orange/10 text-shop_orange text-xs">
                      Featured
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-12 bg-gradient-to-r from-shop_light_green/10 via-shop_orange/5 to-shop_light_green/10 rounded-xl p-6 lg:p-8 border border-shop_light_green/20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-shop_dark_green mb-3">
              Ready to Find Love?
            </h3>
            <p className="text-dark-text mb-6 text-sm lg:text-base">
              Join thousands of singles who have found meaningful relationships through our{' '}
              {categoryTitle.toLowerCase()} platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-shop_dark_green hover:bg-shop_light_green">
                <Link href="/sign-up">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Dating Today
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white"
              >
                <Link href="/category">
                  <Grid3X3 className="w-5 h-5 mr-2" />
                  All Categories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
