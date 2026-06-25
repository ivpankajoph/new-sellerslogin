import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { Navbar } from "@/components/landing/Navbar";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white min-h-screen">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors bg-purple-50 hover:bg-purple-100 py-2 px-4 rounded-full">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-purple max-w-none text-gray-600">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Sellers Login (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. User Representations</h2>
          <p className="mb-4">
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and defined following the laws of India. Sellers Login and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

        </div>
      </main>
      <FooterSection />
    </>
  );
}
