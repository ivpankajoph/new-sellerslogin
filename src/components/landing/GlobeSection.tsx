

const cityMarkers = [
  { label: "San Francisco", left: "18%", top: "36%" },
  { label: "London", left: "47%", top: "30%" },
  { label: "Mumbai", left: "67%", top: "50%" },
  { label: "Singapore", left: "76%", top: "62%" },
  { label: "Sydney", left: "86%", top: "76%" },
];

export function GlobeSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">



          <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
            <div className="absolute inset-[4%] rounded-full bg-purple-300/25 blur-3xl" aria-hidden="true" />
            <div className="globe-shell relative w-full max-w-[560px] aspect-square overflow-hidden rounded-full border border-white/60 shadow-[inset_-35px_-28px_70px_rgba(15,23,42,0.38),inset_28px_24px_55px_rgba(255,255,255,0.32),0_28px_70px_-24px_rgba(88,28,135,0.5)]">
              <div className="world-map" aria-hidden="true">
                <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
                  <g fill="currentColor">
                    <path d="M54 152l52-50 81-14 58 25 34 48-44 28 30 43-43 32-62-14-37 38-57-18-24-55 31-30z" />
                    <path d="M244 279l48 13 30 54-13 78-41 52-33-35 9-64-31-50z" />
                    <path d="M367 92l55-29 64 18 9 38-42 28-54-8z" />
                    <path d="M470 158l63-44 94-7 87 25 64-17 96 26 57 49-45 50-93-16-57 38-84-29-55 19-76-20-71 22-49-40z" />
                    <path d="M542 263l70 8 45 53-18 92-57 53-51-45-7-76z" />
                    <path d="M771 305l45 18 39 48-20 45-59 6-35-40z" />
                    <path d="M862 238l56-10 38 25-17 31-57 2z" />
                  </g>
                </svg>
                <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
                  <g fill="currentColor">
                    <path d="M54 152l52-50 81-14 58 25 34 48-44 28 30 43-43 32-62-14-37 38-57-18-24-55 31-30z" />
                    <path d="M244 279l48 13 30 54-13 78-41 52-33-35 9-64-31-50z" />
                    <path d="M367 92l55-29 64 18 9 38-42 28-54-8z" />
                    <path d="M470 158l63-44 94-7 87 25 64-17 96 26 57 49-45 50-93-16-57 38-84-29-55 19-76-20-71 22-49-40z" />
                    <path d="M542 263l70 8 45 53-18 92-57 53-51-45-7-76z" />
                    <path d="M771 305l45 18 39 48-20 45-59 6-35-40z" />
                    <path d="M862 238l56-10 38 25-17 31-57 2z" />
                  </g>
                </svg>
              </div>

              <div className="globe-grid" aria-hidden="true" />
              <div className="globe-shade" aria-hidden="true" />

              {cityMarkers.map((marker) => (
                <span
                  key={marker.label}
                  aria-label={marker.label}
                  className="absolute z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 shadow-[0_0_0_6px_rgba(168,85,247,0.22),0_0_22px_rgba(168,85,247,0.7)]"
                  style={{ left: marker.left, top: marker.top }}
                />
              ))}

              <div className="absolute left-[22%] top-[33%] h-[22%] w-[36%] rounded-[50%] border-t-2 border-purple-500/80 rotate-[-12deg]" aria-hidden="true" />
              <div className="absolute left-[53%] top-[48%] h-[24%] w-[32%] rounded-[50%] border-t-2 border-purple-500/80 rotate-[18deg]" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 reveal reveal-delay-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Rock steady.
            <br />
            Blazing fast.
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

      <style>{`
        .globe-shell {
          background:
            radial-gradient(circle at 35% 28%, rgba(255, 255, 255, 0.95), rgba(207, 213, 232, 0.8) 31%, rgba(116, 120, 148, 0.98) 67%, rgba(37, 32, 68, 1) 100%);
        }

        .world-map {
          position: absolute;
          inset: 12% -4%;
          display: flex;
          width: 208%;
          color: rgba(25, 28, 49, 0.68);
          filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.2));
          animation: globe-map-spin 22s linear infinite;
        }

        .world-map svg {
          width: 50%;
          height: 100%;
          flex: 0 0 50%;
        }

        .globe-grid {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background:
            repeating-linear-gradient(0deg, transparent 0 42px, rgba(255, 255, 255, 0.16) 43px 44px),
            repeating-linear-gradient(90deg, transparent 0 48px, rgba(255, 255, 255, 0.13) 49px 50px);
          opacity: 0.55;
          mix-blend-mode: screen;
          transform: perspective(700px) rotateY(-18deg);
        }

        .globe-shade {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 32% 26%, rgba(255, 255, 255, 0.42), transparent 25%),
            radial-gradient(circle at 78% 72%, rgba(17, 24, 39, 0.62), transparent 42%),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12), transparent 36%, rgba(17, 24, 39, 0.22));
          pointer-events: none;
        }

        @keyframes globe-map-spin {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .world-map {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
