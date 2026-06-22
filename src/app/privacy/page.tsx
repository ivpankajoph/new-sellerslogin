import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { Navbar } from "@/components/landing/Navbar";
import Link from "next/link";

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-purple max-w-none text-gray-600">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            Sellers Login (owned and operated by Life Changing Networks Private Limited) (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information that you provide directly to us when you register for an account, use our e-commerce platform, subscribe to our newsletter, or communicate with us. This may include your name, email address, billing address, and payment information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, process transactions, send administrative messages, respond to your comments and questions, and provide customer support. We may also use this information to send you marketing communications, subject to your opt-out preferences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Sharing of Information</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These third parties are bound by confidentiality obligations.
          </p>

        </div>
      </main>
      <FooterSection />
    </>
  );
}
