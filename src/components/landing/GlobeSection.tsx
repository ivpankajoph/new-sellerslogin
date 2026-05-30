"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function GlobeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 0, // Light theme globe
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1.2, // Lower brightness so landmass dots are visible against white ocean
      baseColor: [1, 1, 1], // White ocean
      markerColor: [0.66, 0.33, 0.98], // Purple glowing markers
      glowColor: [0.95, 0.95, 0.95], // Subtle shadow/glow
      markers: [
        { location: [37.7595, -122.4367], size: 0.08 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [35.6895, 139.6917], size: 0.1 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [-33.8688, 151.2093], size: 0.08 },
        { location: [1.3521, 103.8198], size: 0.09 },
        { location: [25.2048, 55.2708], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.07 },
      ],
      onRender: (state: Record<string, any>) => {
        state.phi = phi;
        phi += 0.005; // Continues spinning smoothly
      },
    } as any);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Side: Globe */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative reveal reveal-delay-1">
          {/* Decorative stats card floating */}
          <div className="absolute top-10 left-0 md:-left-10 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-lg z-10 max-w-[220px]">
            <div className="text-purple-600 font-mono text-xs font-bold mb-1 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Live Traffic
            </div>
            <div className="text-xl font-bold text-gray-900 leading-tight">5,100,000+</div>
            <div className="text-xs text-gray-500 mt-1">SALES PER MINUTE DURING PEAK TIMES</div>
          </div>

          <div className="absolute bottom-10 right-0 md:-right-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-4 shadow-lg z-10 max-w-[240px]">
            <div className="text-green-600 font-mono text-xs font-bold mb-1 uppercase tracking-wider">
              Total Volume
            </div>
            <div className="text-xl font-bold text-gray-900 leading-tight">$1.6B+</div>
            <div className="text-xs text-gray-500 mt-1">TOTAL SALES AND COUNTING</div>
          </div>

          <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center">
            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "100%", contain: "layout paint size", opacity: 0.9 }}
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 lg:pl-12 reveal reveal-delay-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Rock steady.<br />
            Blazing fast.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
            Your SellersLogin store runs strong, even during your most epic product drops. Scale globally with zero downtime.
          </p>
          
          <div className="flex items-center gap-4">
             <a
                href="#"
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
