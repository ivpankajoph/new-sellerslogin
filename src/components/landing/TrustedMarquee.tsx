import Image from "next/image";

const integrationBrands = [
  { name: "Google", logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Delhivery", logo: "https://www.google.com/s2/favicons?domain=delhivery.com&sz=128" },
  { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook/1877F2" },
  { name: "ChatGPT", logo: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128" },
  { name: "Shadowfax", logo: "https://www.google.com/s2/favicons?domain=shadowfax.in&sz=128" },
  { name: "Razorpay", logo: "https://www.google.com/s2/favicons?domain=razorpay.com&sz=128" },
  { name: "AWS", logo: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128" },
  { name: "Cashfree", logo: "https://www.google.com/s2/favicons?domain=cashfree.com&sz=128" },
  { name: "Google Cloud", logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128" },
];

export function TrustedMarquee() {
  // Duplicate array for seamless infinite loop
  const items = [...integrationBrands, ...integrationBrands, ...integrationBrands];

  return (
    <section id="trusted" className="py-6 md:py-8 border-y border-gray-200 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center reveal">
        <h2 className="text-sm font-semibold text-purple-600 tracking-wide uppercase">Seamlessly integrate with top industry tools</h2>
      </div>
      
      <div className="reveal relative w-full overflow-hidden">
        {/* Left & Right Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-linear-to-r from-gray-50/50 via-gray-50/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-linear-to-l from-gray-50/50 via-gray-50/20 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex items-center gap-12 md:gap-20 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 select-none"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
                <Image src={brand.logo} alt={`Sellers Login ${brand.name} integration logo`} fill sizes="48px" className="object-contain" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-700 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
