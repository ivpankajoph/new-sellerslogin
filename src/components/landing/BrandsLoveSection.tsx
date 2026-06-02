

import { images } from "@/lib/images";

export function BrandsLoveSection() {
  const row1 = [
    images.heroStore,
    images.heroFashion,
    images.featureMarketing,
    images.caseFood,
    images.blogStrategy,
    images.heroPayment,
  ];

  const row2 = [
    images.heroProducts,
    images.featureEditor,
    images.caseTech,
    images.featureMobile,
    images.showcaseFashion,
    images.heroWarehouse,
  ];

  // Duplicate arrays for seamless infinite loop
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];

  return (
    <section className="py-20 md:py-32 bg-[#111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          The brands you love, love SellersLogin
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-8 overflow-hidden">
        {/* Left & Right Fade Edges for dark bg */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-linear-to-r from-[#111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-linear-to-l from-[#111] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Marquee (Moving Left) */}
        <div className="flex items-center gap-6 md:gap-8 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
          {row1Items.map((img, i) => (
            <div key={`row1-${i}`} className="w-[280px] sm:w-[400px] h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-lg bg-gray-900 border border-white/10 relative group">
              <img src={img} alt="Showcase" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Row 2 - Marquee Reverse (Moving Right) */}
        <div className="flex items-center gap-6 md:gap-8 w-max animate-[marquee-reverse_50s_linear_infinite] hover:[animation-play-state:paused] will-change-transform -ml-32">
          {row2Items.map((img, i) => (
            <div key={`row2-${i}`} className="w-[280px] sm:w-[400px] h-[220px] sm:h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-lg bg-gray-900 border border-white/10 relative group">
              <img src={img} alt="Showcase" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
