'use client';

interface ReviewDetailsProps {
  highlights: Array<{
    title: string;
    value: string;
  }>;
  worthItTitle: string;
  worthItDescription: string;
  pros: string[];
  cons: string[];
  overallScore: string;
  scores: Array<{
    title: string;
    desc: string;
    score: string;
  }>;
}

export default function ReviewDetails({
  highlights,
  worthItTitle,
  worthItDescription,
  pros,
  cons,
  overallScore,
  scores
}: ReviewDetailsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-14">

      {/* HIGHLIGHTS */}
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white border rounded-xl p-5 shadow-sm"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-500 text-white text-sm">
              ✓
            </span>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="font-semibold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* WORTH IT SECTION */}
      <div>
        <h2 className="text-2xl font-bold mb-3">{worthItTitle}</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          {worthItDescription}
        </p>
      </div>

      {/* PROS & CONS */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* PROS */}
        <div className="border rounded-xl p-6 bg-green-50">
          <h3 className="text-xl font-semibold mb-4">Pros</h3>
          <ul className="space-y-3 text-gray-700">
            {pros.map((pro, i) => (
              <li key={i}>✔ {pro}</li>
            ))}
          </ul>
        </div>

        {/* CONS */}
        <div className="border rounded-xl p-6 bg-red-50">
          <h3 className="text-xl font-semibold mb-4">Cons</h3>
          <ul className="space-y-3 text-gray-700">
            {cons.map((con, i) => (
              <li key={i}>✖ {con}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* AT A GLANCE */}
      <div className="border rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold">At a Glance</h2>
            <p className="text-gray-500">Editorial Score</p>
          </div>
          <div className="text-5xl font-bold text-emerald-600">{overallScore}</div>
        </div>

        <div className="space-y-5">
          {scores.map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b pb-4 last:border-none"
            >
              <div>
                <h4 className="font-semibold text-gray-900">{row.title}</h4>
                <p className="text-sm text-gray-500">{row.desc}</p>
              </div>
              <span className="font-bold text-gray-900">{row.score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}