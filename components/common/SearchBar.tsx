'use client';
import { Loader2, Search, X, TrendingUp } from 'lucide-react';
import { useCallback, useEffect, useState, useRef } from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';
import Logo from './Logo';
import { useOutsideClick } from '@/hooks';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useOutsideClick<HTMLDivElement>(() => setShowSearch(false));

  // Detect if user is on Mac
  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const mockCategories = [
    {
      _id: '1',
      title: 'Singles Dating',
      slug: { current: 'singles-dating' },
      description: 'Find your perfect match with our comprehensive singles dating platform.',
    },
    {
      _id: '2',
      title: 'Christian Dating',
      slug: { current: 'christian-dating' },
      description: 'Faith-based dating for Christian singles.',
    },
    {
      _id: '3',
      title: 'Gay Dating',
      slug: { current: 'gay-dating' },
      description: 'Safe and inclusive dating platform for gay men.',
    },
    {
      _id: '4',
      title: 'Lesbian Dating',
      slug: { current: 'lesbian-dating' },
      description: 'Empowering lesbian women todatingwebsitesonline.',
    },
    {
      _id: '5',
      title: 'Senior Dating',
      slug: { current: 'senior-dating' },
      description: 'Dating for mature singles over 50.',
    },
  ];

  const mockSections = [
    {
      _id: 's1',
      title: 'About Us',
      href: '/about',
      description: 'Learn more about our dating platform',
    },
    {
      _id: 's2',
      title: 'Contact Us',
      href: '/contact',
      description: 'Get in touch with our support team',
    },
    {
      _id: 's3',
      title: 'Help Center',
      href: '/help',
      description: 'Find answers to common questions',
    },
    {
      _id: 's4',
      title: 'Privacy Policy',
      href: '/privacy',
      description: 'Our commitment to your privacy',
    },
  ];

  const fetchFeaturedCategories = useCallback(async () => {
    try {
      setFeaturedCategories(mockCategories.slice(0, 3));
    } catch (error) {
      console.error('Error fetching featured categories:', error);
    }
  }, []);

  useEffect(() => {
    if (showSearch === true) {
      fetchFeaturedCategories();
      // Focus input when modal opens
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [showSearch, fetchFeaturedCategories]);

  // Handle escape key to close modal and Ctrl+K to open modal
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Handle Escape key to close modal
      if (e.key === 'Escape' && showSearch) {
        setShowSearch(false);
        return;
      }

      // Handle Ctrl+K (or Cmd+K on Mac) to open search modal
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault(); // Prevent browser's default search behavior
        setShowSearch(true);
        return;
      }
    };

    // Always listen for global keyboard shortcuts
    document.addEventListener('keydown', handleKeydown);

    // Handle body scroll lock only when modal is open
    if (showSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'unset';
    };
  }, [showSearch]);

  // Search through categories and sections
  const searchResults = useCallback(async () => {
    if (!search) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const searchTerm = search.toLowerCase();

      // Search categories
      const categoryResults = mockCategories
        .filter(
          (category) =>
            category.title.toLowerCase().includes(searchTerm) ||
            category.description.toLowerCase().includes(searchTerm)
        )
        .map((category) => ({ ...category, type: 'category' }));

      // Search sections
      const sectionResults = mockSections
        .filter(
          (section) =>
            section.title.toLowerCase().includes(searchTerm) ||
            section.description.toLowerCase().includes(searchTerm)
        )
        .map((section) => ({ ...section, type: 'section' }));

      setResults([...categoryResults, ...sectionResults]);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  // Debounce input changes to reduce API calls
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchResults();
    }, 300); // Delay of 300ms

    return () => clearTimeout(debounceTimer); // Cleanup the timer
  }, [searchResults]);
  return (
    <>
      {/* Search Trigger Button - Modern Input Style */}
      <div className="flex">
        {/* Desktop Version - Full Input Style */}
        <button
          onClick={() => setShowSearch(true)}
          className="group hidden sm:flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-shop_light_green rounded-lg px-3 py-2 transition-all duration-200 min-w-[200px] md:min-w-[240px]"
          aria-label={`Open search (${isMac ? 'Cmd' : 'Ctrl'}+K)`}
        >
          {/* Search Icon */}
          <Search className="w-4 h-4 text-gray-400 group-hover:text-shop_dark_green transition-colors duration-200 flex-shrink-0" />

          {/* Placeholder Text */}
          <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200 flex-1 text-left">
            Find your perfect match...
          </span>

          {/* Keyboard Shortcut Badge */}
          <div className="flex items-center gap-1 bg-white border border-gray-200 group-hover:border-gray-300 px-2 py-1 rounded text-xs text-gray-500 font-mono flex-shrink-0 transition-colors duration-200">
            <span>{isMac ? '⌘' : 'Ctrl'}</span>
            <span>K</span>
          </div>
        </button>

        {/* Mobile Version - Icon Only */}
        <button
          onClick={() => setShowSearch(true)}
          className="group flex sm:hidden items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-shop_btn_dark_green rounded-lg hoverEffect"
          aria-label="Open search"
        >
          <Search className="w-4 h-4 text-gray-400 group-hover:text-shop_dark_green transition-colors duration-200" />
        </button>
      </div>

      {/* Search Modal Overlay */}
      {showSearch && (
        <div
          className={`fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 search-modal-overlay ${
            showSearch ? 'animate-fadeIn' : 'animate-fadeOut'
          }`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 w-full h-screen bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            ref={modalRef}
            className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden search-modal-content ${
              showSearch ? 'animate-scaleIn' : 'animate-scaleOut'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-shop_dark_green to-shop_light_green p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Search className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold">Find Matches</h2>
                    <div className="hidden sm:flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md border border-white/20">
                      <span className="text-xs font-mono">{isMac ? 'Cmd' : 'Ctrl'}</span>
                      <span className="text-xs">+</span>
                      <span className="text-xs font-mono">K</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowSearch(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                  aria-label="Close search (Escape)"
                  title="Close (Escape)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Input
                    ref={inputRef}
                    placeholder="Search for your perfect match..."
                    className="w-full pl-12 pr-16 py-4 text-lg bg-white/10 border-white/20 placeholder:text-white/70 text-white focus:bg-white/20 focus:border-white/40 rounded-xl"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      className="absolute right-12 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                    >
                      <X className="w-4 h-4 text-white/70 hover:text-white" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2.5 rounded-lg transition-all duration-200"
                  >
                    <Search className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            </div>

            {/* Content */}
            <div className="max-h-[60vh] min-h-[50vh] overflow-y-auto">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 text-shop_dark_green">
                  <Loader2 className="w-8 h-8 animate-spin mb-3" />
                  <p className="text-lg font-semibold">Finding matches...</p>
                  <p className="text-sm text-gray-500">Please wait a moment</p>
                </div>
              ) : results?.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {results.map((item: any) => (
                    <div
                      key={item?._id}
                      className="p-4 hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <Link
                        href={
                          item.type === 'category' ? `/category/${item.slug.current}` : item.href
                        }
                        onClick={() => setShowSearch(false)}
                        className="flex items-center gap-4 w-full"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-shop_light_green to-shop_dark_green rounded-lg flex items-center justify-center">
                          {item.type === 'category' ? (
                            <Search className="w-6 h-6 text-white" />
                          ) : (
                            <TrendingUp className="w-6 h-6 text-white" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg line-clamp-1 mb-1 group-hover:text-shop_dark_green transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span
                              className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${
                                item.type === 'category'
                                  ? 'bg-shop_light_green/10 text-shop_dark_green'
                                  : 'bg-blue-100 text-blue-700'
                              }`}
                            >
                              {item.type === 'category' ? 'Dating Category' : 'Page Section'}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12">
                  {search === '' ? (
                    <div className="text-center">
                      <div className="bg-gray-50 rounded-2xl p-8 mx-6">
                        <div className="flex items-center justify-center mb-4">
                          <div className="bg-shop_dark_green/10 p-3 rounded-full">
                            <Search className="w-8 h-8 text-shop_dark_green" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Discover Amazing Matches
                        </h3>
                        <div className="text-gray-600 mb-6">
                          <p>Search and explore thousands of potential matches from</p>{' '}
                          <Logo className="inline text-base font-bold text-shop_dark_green" />
                        </div>

                        {/* Featured Categories Suggestions */}
                        {featuredCategories?.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3 text-left">
                              Popular Categories:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {featuredCategories.map((item: any) => (
                                <button
                                  key={item?._id}
                                  onClick={() => setSearch(item?.title as string)}
                                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-shop_light_green hover:bg-shop_light_green/5 px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-shop_dark_green transition-all duration-200"
                                >
                                  <Search className="w-3 h-3" />
                                  <span className="line-clamp-1">{item?.title}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="bg-red-50 rounded-2xl p-8 mx-6">
                        <div className="flex items-center justify-center mb-4">
                          <div className="bg-red-100 p-3 rounded-full">
                            <X className="w-8 h-8 text-red-500" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          No Results Found
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Sorry, we couldn&apos;t find any matches for{' '}
                          <span className="font-semibold text-red-600">&quot;{search}&quot;</span>
                        </p>
                        <button
                          onClick={() => setSearch('')}
                          className="bg-shop_dark_green hover:bg-shop_light_green text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                        >
                          Clear Search
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
