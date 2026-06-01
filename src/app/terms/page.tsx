import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { Navbar } from "@/components/landing/Navbar";

export default function TermsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-purple max-w-none text-gray-600">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Life Changing Networks Pvt Ltd, doing business as SellersLogin ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. User Representations</h2>
          <p className="mb-4">
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and defined following the laws of India. Life Changing Networks Pvt Ltd and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <address className="not-italic bg-gray-50 p-6 rounded-xl border border-gray-100">
            <strong>Life Changing Networks Pvt Ltd (SellersLogin)</strong><br />
            1405, Gaur city 2, Noida Extension, 10th Avenue<br />
            Ghaziabad 201009, UP, India<br />
            Email: <a href="mailto:hello@sellerslogin.com" className="text-purple-600 hover:underline">hello@sellerslogin.com</a>
          </address>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
