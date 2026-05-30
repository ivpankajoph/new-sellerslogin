"use client";

import { useState } from "react";
import { LandingIcon } from "@/components/icons/LandingIcon";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-purple-500 text-white text-center py-2.5 px-6 text-[13px] font-medium relative z-200 flex items-center justify-center gap-2 flex-wrap">
      <LandingIcon name="sparkles" size={14} className="shrink-0 opacity-90" />
      Introducing AI Store Builder — Create your store in 60 seconds with AI
      <a href="#features" className="text-ash no-underline border-b border-graphite ml-2 hover:text-snow">Learn more →</a>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none text-ash cursor-none text-lg leading-none"
        type="button"
        aria-label="Close announcement"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
}
