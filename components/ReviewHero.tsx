'use client';

import Image from 'next/image';

interface ReviewHeroProps {
  name: string;
  score: string;
  category: string;
  description: string;
  logoUrl?: string;
  reviewCount?: number;
  author?: string;
  date?: string;
  readTime?: string;
}

export default function ReviewHero({
  name,
  score,
  category,
  description,
  logoUrl,
  reviewCount = 1311,
  author = "Morgan Mandriota",
  date = "June 27, 2025",
  readTime = "6 min read"
}: ReviewHeroProps) {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Rating Row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex text-emerald-500">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">{reviewCount.toLocaleString()} Reviews</span>
            <span className="text-sm text-emerald-600 font-medium">TrustScore</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {name} Review (2026)
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-6">
            {description}
          </p>

          {/* Author + meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gray-300" />
              <span className="font-medium text-gray-700">{author}</span>
            </div>
            <span>• {date}</span>
            <span>• {readTime}</span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center gap-5 border">

          {/* Logo */}
          <div className="w-40 h-16 flex items-center justify-center">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={name}
                width={160}
                height={60}
                className="object-contain"
              />
            ) : (
              <div className="text-2xl font-bold text-gray-700">{name}</div>
            )}
          </div>

          {/* Score */}
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">{score}</div>
            <div className="text-sm text-gray-500">{category}</div>
          </div>

          {/* CTA */}
          <a
            href="#"
            target="_blank"
            className="w-full"
          >
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
              Visit Site →
            </button>
          </a>

          {/* Trust text */}
          <p className="text-xs text-gray-500 text-center">
            Compare prices, features, and reviews before joining.
          </p>
        </div>
      </div>
    </section>
  );
}