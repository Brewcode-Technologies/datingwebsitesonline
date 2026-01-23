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
import Image from 'next/image';
import { ArrowRight, Package, Tag, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
    image: '/categories/singles-dating.png',
  },
  {
    _id: '2',
    title: 'Christian Dating',
    slug: { current: 'christian-dating' },
    description:
      'Faith-based dating for Christian singles. Build relationships founded on shared values and beliefs.',
    featured: false,
    range: '21-60',
    image: '/categories/christian-dating.jpeg',
  },
  {
    _id: '3',
    title: 'Gay Dating',
    slug: { current: 'gay-dating' },
    description:
      'Safe and inclusive dating platform for gay men.datingwebsitesonline, friendship, and meaningful connections.',
    featured: false,
    range: '18-65',
    image: '/categories/gay-dating.jpeg',
  },
  {
    _id: '4',
    title: 'Lesbian Dating',
    slug: { current: 'lesbian-dating' },
    description:
      'Empowering lesbian women todatingwebsitesonline and build lasting relationships in a supportive community.',
    featured: false,
    range: '18-65',
    image: '/categories/lesbian-dating.png',
  },
  {
    _id: '5',
    title: 'Senior Dating',
    slug: { current: 'senior-dating' },
    description:
      'Dating for mature singles over 50. Find companionship and love in your golden years.',
    featured: true,
    range: '50+',
    image: '/categories/senior-dating.jpg',
  },
];

const CategoryPage = async () => {
  const categories = mockCategories;

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
                <BreadcrumbPage>Categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="text-center mb-10">
          <Title className="text-3xl lg:text-4xl font-bold text-shop_dark_green mb-3">
            Dating Categories
          </Title>
          <p className="text-base lg:text-lg text-dark-text max-w-2xl mx-auto mb-6">
            Discover our wide range of dating platforms organized by categories. Find exactly what
            you're looking for with ease.
          </p>

          {/* View All Products Button */}
          <div className="flex justify-center">
            {/* <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-shop_dark_green hover:bg-shop_light_green text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Package className="w-5 h-5" />
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link> */}
          </div>
        </div>

        {categories.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category._id}
                  href={`/category/${category.slug?.current}`}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-shop_light_green transform hover:-translate-y-1"
                >
                  {/* Category Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Featured Badge */}
                    {category.featured && (
                      <div className="absolute top-3 left-3 bg-shop_orange text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                        <Tag className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Age Range Badge */}
                    {category.range && (
                      <div className="absolute top-3 right-3 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        {category.range}
                      </div>
                    )}
                  </div>

                  {/* Category Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-shop_dark_green group-hover:text-shop_light_green transition-colors duration-300">
                        {category.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-shop_light_green group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 ml-2" />
                    </div>

                    {category.description && (
                      <p className="text-dark-text text-sm mb-4 line-clamp-3">
                        {category.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-xs text-light-text">
                      <span className="capitalize truncate text-xs">
                        {category.slug?.current?.replace(/-/g, ' ')}
                      </span>
                      <Badge className="bg-shop_light_pink/50 text-shop_dark_green text-xs">
                        Explore
                      </Badge>
                    </div>
                  </div>

                  {/* Hover Effect Bottom Border */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-shop_light_green via-shop_orange to-shop_light_green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* View All Products CTA after categories */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-shop_light_green/10 via-shop_orange/5 to-shop_light_green/10 rounded-xl p-8 border border-shop_light_green/20">
                <h3 className="text-xl lg:text-2xl font-semibold text-shop_dark_green mb-3">
                  Ready todatingwebsitesonline?
                </h3>
                <p className="text-dark-text text-sm lg:text-base mb-6">
                  Join thousands of singles who have found meaningful relationships through our
                  dating platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center gap-2 bg-shop_dark_green hover:bg-shop_light_green text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Heart className="w-5 h-5" />
                    Start Dating Today
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center gap-2 border-2 border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300"
                  >
                    <Package className="w-5 h-5" />
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-md border border-gray-100/50 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-shop_light_green">
                <Image
                  // src="/categories/singles-dating.png"
                  src="/categories/singles-dating.png"
                  alt="Dating Categories"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-shop_dark_green mb-3">
                No Categories Available
              </h3>
              <p className="text-dark-text text-sm mb-6">
                It looks like there are no categories set up yet. Check back soon for our dating
                categories!
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-shop_light_green hover:bg-shop_dark_green text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300"
              >
                <Package className="w-4 h-4" />
                Browse All Services
              </Link>
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        {/* {categories.length > 0 && (
          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-md border border-gray-100/50">
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-shop_dark_green mb-3">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-dark-text mb-6 text-sm lg:text-base">
                Browse all our services or contact us to learn more about our dating platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-shop_light_green hover:bg-shop_dark_green text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300"
                >
                  <Package className="w-4 h-4" />
                  All Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-shop_light_green text-shop_light_green hover:bg-shop_light_green hover:text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300"
                >
                  <Heart className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )} */}
      </Container>
    </div>
  );
};

export default CategoryPage;
