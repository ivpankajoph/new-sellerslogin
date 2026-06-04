

import Image from "next/image";

export function StepsSection() {
  return (
    <section
      id="steps"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Build fast on SellersLogin
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="relative flex justify-center lg:justify-start gap-4 sm:gap-6 reveal reveal-delay-1">
            <div className="w-1/2 max-w-[280px] mt-0 lg:-mt-12 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 aspect-[3/4] relative">
              <Image
                src="/images/store_management.png"
                alt="Store Management"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 max-w-[280px] mt-12 lg:mt-24 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 aspect-[3/4] relative">
              <Image
                src="/images/packing_orders.png"
                alt="Product"
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>

          {/* Right Side: Steps */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto reveal reveal-delay-2">
            <div className="flex flex-col">
              {[
                { num: "01", title: "Add your first product" },
                { num: "02", title: "Customize your store" },
                { num: "03", title: "Set up payments" },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className={`group flex items-center gap-6 py-6 lg:py-8 border-b border-gray-200 transition-colors ${i === 0 ? "border-t" : ""}`}
                >
                  <span className="text-xl md:text-2xl font-mono text-purple-600 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-10 lg:mt-12 flex items-center justify-between gap-6">
              <a
                href="https://web.sellerslogin.com/vendor/registration"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white rounded-full py-3.5 px-8 text-base font-semibold transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 whitespace-nowrap no-underline"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
