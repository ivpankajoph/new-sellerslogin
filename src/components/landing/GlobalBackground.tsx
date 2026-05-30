"use client";

export function GlobalBackground() {
  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-gray-50">
        <div className="absolute top-0 left-0 w-[200vw] h-[200vh] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-size-[24px_24px] animate-pan-background" />
        
        {/* Soft gradients to fade out edges */}
        <div className="absolute inset-0 bg-linear-to-b from-white/60 via-transparent to-white/60" />
      </div>

      <style>{`
        @keyframes pan-background {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-24px, -24px);
          }
        }
        .animate-pan-background {
          animation: pan-background 2s linear infinite;
        }
      `}</style>
    </>
  );
}
