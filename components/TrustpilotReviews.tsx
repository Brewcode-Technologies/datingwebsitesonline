'use client';

interface TrustpilotReviewsProps {
  siteName: string;
  logoUrl?: string;
  overallRating: string;
  totalReviews: number;
  starRating: number;
  breakdown: Array<{
    label: string;
    value: number;
  }>;
  reviews: Array<{
    name: string;
    initial: string;
    stars: number;
    date: string;
    title: string;
    text: string;
  }>;
}

export default function TrustpilotReviews({
  siteName,
  logoUrl,
  overallRating,
  totalReviews,
  starRating,
  breakdown,
  reviews
}: TrustpilotReviewsProps) {
  const renderStars = (count: number) => {
    return '★★★★★☆☆☆☆☆'.slice(0, 5).split('').map((_, i) => 
      i < count ? '★' : '☆'
    ).join('');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-10">

      {/* TITLE */}
      <div>
        <h2 className="text-3xl font-bold">Trustpilot reviews</h2>
        <p className="text-gray-600 mt-1">See what some customers are saying about {siteName}</p>
      </div>

      {/* SUMMARY */}
      <div className="flex flex-col xl:flex-row gap-10">

        {/* LEFT */}
        <div className="flex-1 space-y-5">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={siteName}
              className="h-16 object-contain"
            />
          ) : (
            <div className="text-2xl font-bold text-gray-700">{siteName}</div>
          )}

          <div className="flex items-center gap-3">
            <p className="text-xl font-semibold text-gray-900">{overallRating}</p>
            <span className="text-gray-500">• Reviews {totalReviews.toLocaleString()}</span>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 text-green-600 text-xl">
            {renderStars(starRating).split('').map((s, i) => (
              <span key={i}>{s}</span>
            ))}
            <span className="text-gray-500 ml-2 text-sm">on Trustpilot</span>
          </div>
        </div>

        {/* RIGHT (BREAKDOWN) */}
        <div className="w-full xl:w-[40%] space-y-3">
          {breakdown.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-20 text-gray-700">{item.label}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-emerald-600 rounded"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="w-10 text-right text-gray-700">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS LIST */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="border rounded-xl p-5 shadow-sm bg-white">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                {r.initial}
              </div>
              <div>
                <p className="font-semibold">{r.name}</p>
                <div className="text-green-600 text-sm">
                  {'★★★★★'.slice(0, r.stars)}
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-2">{r.date}</p>
            <h4 className="font-semibold mb-1">{r.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 pt-6">
        {[1, 2, 3, '...', 25].map((p, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded cursor-pointer ${
              p === 1
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {p}
          </span>
        ))}
        <span className="px-3 py-1 bg-gray-100 rounded cursor-pointer">→</span>
      </div>
    </section>
  );
}