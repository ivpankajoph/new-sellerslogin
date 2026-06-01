import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { Navbar } from "@/components/landing/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-purple max-w-none text-gray-600">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            Life Changing Networks Pvt Ltd ("we," "us," or "our") operates SellersLogin. We collect information that you provide directly to us when you register for an account, use our e-commerce platform, subscribe to our newsletter, or communicate with us. This may include your name, email address, billing address, and payment information.
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

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
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
