import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { Navbar } from "@/components/landing/Navbar";

type Detail = {
  label: string;
  value: string;
};

type Card = {
  title: string;
  body: string;
  items?: string[];
};

export type FooterLinkedPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
  details?: Detail[];
  cards: Card[];
  steps?: string[];
  cta?: {
    label: string;
    href: string;
  };
};

const detailIcons: Record<string, LucideIcon> = {
  Email: Mail,
  Phone,
  Address: MapPin,
};

export function FooterLinkedPage({ page }: { page: FooterLinkedPageContent }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="bg-white pt-32 text-gray-900">
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600 no-underline transition-colors hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-700">
                <ShieldCheck className="h-4 w-4" />
                {page.eyebrow}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
                {page.description}
              </p>
              {page.updated && (
                <p className="mt-5 text-sm font-medium text-gray-500">
                  Last updated: {page.updated}
                </p>
              )}
            </div>

            <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-950">Quick details</h2>
              <div className="mt-5 space-y-4">
                {(page.details ?? [
                  { label: "Email", value: "info@sellerslogin.com" },
                  { label: "Address", value: "1405, Gaur City 2, Noida Extension, Ghaziabad 201009, UP, India" },
                ]).map((detail) => {
                  const Icon = detailIcons[detail.label] ?? CheckCircle2;
                  return (
                    <div key={`${detail.label}-${detail.value}`} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-purple-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700">{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {page.cta && (
                <Link
                  href={page.cta.href}
                  target={page.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={page.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  {page.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </aside>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {page.cards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{card.body}</p>
                {card.items && (
                  <ul className="mt-5 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {page.steps && (
          <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-950">How it works</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-4">
                {page.steps.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-purple-100 bg-purple-50/60 p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-purple-700 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-semibold leading-relaxed text-gray-800">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <FooterSection />
    </>
  );
}
