"use client";

import { useState } from "react";
import { PlayCircle, X, BarChart3, MessageCircle, Mic, Mail, ArrowRight } from "lucide-react";

const DEMO_CARDS = [
  {
    title: "Analytics Marketing",
    description: "Get real-time insights into your store's performance with advanced charts and data tracking to optimize growth.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-100",
    videoUrl: "/videos/analytics.mp4",
  },
  {
    title: "Whatsapp Marketing",
    description: "Automate your sales and customer support directly through the official WhatsApp Business API integration.",
    icon: MessageCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-100",
    videoUrl: "/videos/whatsapp.mp4",
  },
  {
    title: "AI Voice Automation",
    description: "Deploy cutting-edge AI voice agents to handle inbound calls and scale your operations without extra human resources.",
    icon: Mic,
    color: "text-violet-600",
    bg: "bg-violet-100",
    videoUrl: "/videos/ai-voice.mp4",
  },
  {
    title: "Email Marketing",
    description: "Send beautifully crafted newsletters and automated drip campaigns to keep your customers engaged and buying.",
    icon: Mail,
    color: "text-rose-500",
    bg: "bg-rose-100",
    videoUrl: "/videos/email.mp4",
  },
];

export function DemoCardsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          See our platform in action
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Watch quick demos to see how these powerful features work.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DEMO_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/5"
          >
            <div>
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${card.bg}`}
              >
                <card.icon className={`h-8 w-8 ${card.color}`} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{card.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>

            <button
              onClick={() => setActiveVideo(card.videoUrl)}
              className="flex w-full items-center justify-between rounded-full border-2 border-violet-950 py-2.5 pl-5 pr-2 font-semibold text-violet-950 transition-all hover:bg-violet-950 hover:text-white"
            >
              <span>Live demo</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-950 text-white transition-transform group-hover:bg-white group-hover:text-violet-950">
                <PlayCircle className="h-5 w-5" />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl rounded-2xl bg-black shadow-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative overflow-hidden rounded-2xl pt-[56.25%]">
              <video
                src={activeVideo}
                autoPlay
                controls
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
