import { images } from "@/lib/images";

export function HelpSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          How can SellersLogin help you?
        </h2>

        {/* Top Feature Card */}
        <div className="bg-purple-600 rounded-3xl overflow-hidden flex flex-col lg:flex-row mb-6 sm:mb-8 shadow-sm">
          <div className="p-8 md:p-14 lg:w-1/2 flex flex-col justify-center relative z-10">
            {/* Background blob abstract shape for aesthetic */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <h3 className="text-3xl md:text-[42px] font-bold text-white mb-6 leading-tight relative">
              Sell with <br className="hidden sm:block" />SellersLogin
            </h3>
            <p className="text-purple-100 text-lg md:text-xl mb-10 max-w-md relative">
              Sell and scale your way, with a SellersLogin store as unique as you!
            </p>
            <div className="relative">
              <a
                href="#pricing"
                className="inline-block bg-white text-purple-600 font-semibold py-3.5 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
              >
                Create your dream store
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full flex items-end justify-end pt-12 pl-12 overflow-hidden bg-[#5B37D2]">
            {/* Decorative background shape mimicking the screenshot */}
            <div className="absolute bottom-0 left-0 w-[150%] h-[150%] bg-[#4B2BA8] rounded-full -translate-x-[20%] translate-y-[30%]" />
            <img 
              src={images.featureEditor} 
              alt="Store editor" 
              className="w-full h-full object-cover object-left-top rounded-tl-2xl shadow-2xl relative z-10 border-t border-l border-purple-400/30"
            />
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-72 sm:h-96 relative">
            <img 
              src={images.heroStore} 
              alt="Build stores for others" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-72 sm:h-96 relative">
            <img 
              src={images.featureAnalytics} 
              alt="Add new features" 
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
