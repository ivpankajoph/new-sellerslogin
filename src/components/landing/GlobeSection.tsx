"use client";

import React from "react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 4,
  globeColor: "#ffffff",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#ffffff",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(168, 85, 247, 0.8)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const arcs = [
  { order: 1, startLat: 37.7749, startLng: -122.4194, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: "#a855f7" },
  { order: 2, startLat: 51.5074, startLng: -0.1278, endLat: 19.076, endLng: 72.8777, arcAlt: 0.3, color: "#a855f7" },
  { order: 3, startLat: 19.076, startLng: 72.8777, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.3, color: "#a855f7" },
  { order: 4, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3, color: "#a855f7" },
  { order: 5, startLat: -33.8688, startLng: 151.2093, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.3, color: "#a855f7" },
];

export function GlobeSection() {
  return (
    <section className="pt-20 md:pt-32 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
            <div className="absolute inset-[4%] rounded-full bg-purple-300/25 blur-3xl" aria-hidden="true" />
            <div className="absolute inset-0 z-10 w-full h-full">
              <World globeConfig={globeConfig} data={arcs} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 reveal reveal-delay-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Make Yourself
            <br />
            At Global Level
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
            Your SellersLogin store runs strong, even during your most epic
            product drops. Scale globally with zero downtime.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-purple-200 text-black rounded-full py-3.5 px-8 text-base font-semibold transition-all duration-200 hover:bg-purple-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 whitespace-nowrap border border-purple-300"
            >
              Start your free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
