import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Careers | Sellers Login",
  description: "Career opportunities, hiring areas, and application guidance for Sellers Login.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Company",
  title: "Careers",
  description:
    "Sellers Login looks for practical builders who understand ecommerce operations, seller support, automation, design, engineering, and customer success. Open roles may change, but strong applications can be shared through the official contact email.",
  details: [


  ],
  cards: [
    {
      title: "Teams we hire for",
      body: "Hiring needs depend on product roadmap, customer demand, and operational priorities.",
      items: [
        "Frontend, backend, full-stack, QA, DevOps, and automation engineering.",
        "Product design, content, growth, marketing, and analytics roles.",
        "Customer success, seller onboarding, support operations, and partnerships.",
      ],
    },
    {
      title: "What helps applications",
      body: "The strongest applications show direct evidence of execution, ownership, and clear communication.",
      items: [
        "Share a concise resume, portfolio, GitHub, case study, or work sample where relevant.",
        "Mention the role area, preferred location or remote preference, and availability.",
        "Describe ecommerce, SaaS, operations, logistics, or seller-support experience clearly.",
      ],
    },
    {
      title: "How we work",
      body: "The product touches real seller workflows, so teams are expected to think in terms of speed, reliability, and operational detail.",
      items: [
        "Build for users who handle orders, inventory, delivery, payments, and support every day.",
        "Prioritize simple workflows, clean handoffs, and measurable customer outcomes.",
        "Document decisions well enough for engineering, support, and business teams to stay aligned.",
      ],
    },
    {
      title: "Hiring process",
      body: "The exact process depends on the role, but most shortlists include profile review, practical discussion, and team evaluation.",
      items: [
        "Shortlisted candidates may receive a task, portfolio review, or technical discussion.",
        "Customer-facing roles may include scenario-based support or communication rounds.",
        "Final details such as compensation, joining date, and work mode are confirmed directly.",
      ],
    },
  ],
  steps: [
    "Email your profile with the role area in the subject line.",
    "The team reviews fit against current or upcoming hiring needs.",
    "Shortlisted candidates complete the relevant interview or work-sample step.",
    "Final selection and onboarding details are shared directly.",
  ],
  cta: { label: "Contact Us", href: "/contact" },
};

export default function CareersPage() {
  return <FooterLinkedPage page={page} />;
}
