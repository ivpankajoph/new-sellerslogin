"use client";

export function BackToTop() {
  return (
    <button
      id="back-top"
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 w-12 h-12 bg-obsidian text-snow rounded-full flex items-center justify-center text-xl cursor-none opacity-0 invisible transition-all duration-300 z-40 shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-none [&.visible]:opacity-100 [&.visible]:visible"
    >
      ↑
    </button>
  );
}
