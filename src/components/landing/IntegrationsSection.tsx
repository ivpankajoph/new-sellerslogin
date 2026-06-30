import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaGoogle, FaWallet } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { MdStorefront } from "react-icons/md";
import { Bot } from "lucide-react";

export function IntegrationsSection() {
  const orbitingIcons = [
    { Icon: FaFacebook, color: "text-[#1877F2]", top: "10%", left: "50%", delay: "0s" },
    { Icon: FaWhatsapp, color: "text-[#25D366]", top: "70%", left: "80%", delay: "1s" },
    { Icon: Bot, color: "text-slate-800", top: "30%", left: "10%", delay: "2s" },
    { Icon: FaGoogle, color: "text-[#EA4335]", top: "20%", left: "80%", delay: "3s" },
    { Icon: SiRazorpay, color: "text-[#02042B]", top: "80%", left: "20%", delay: "4s" },
    { Icon: FaWallet, color: "text-orange-500", top: "50%", left: "90%", delay: "5s" },
    { Icon: MdStorefront, color: "text-blue-600", top: "85%", left: "50%", delay: "6s" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              20+ integrations to boost workflows
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Seamlessly integrate the apps your business relies on, or find new ones with tailored recommendations to enrich your CRM and help your business flourish.
            </p>
            <Link 
              href="#compare" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-violet-700 bg-violet-100 hover:bg-violet-200 transition-colors rounded-lg"
            >
              Check pricing
            </Link>
          </div>

          {/* Right Column - Visual */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-violet-400/20 rounded-full blur-3xl scale-90"></div>
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-3xl scale-75 translate-x-10"></div>
            
            {/* Orbital Rings */}
            <div className="absolute inset-[5%] border border-violet-200/50 rounded-full"></div>
            <div className="absolute inset-[20%] border border-violet-200/50 rounded-full"></div>
            <div className="absolute inset-[35%] border border-violet-200/50 rounded-full"></div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-violet-600/20 relative p-4 border border-violet-100">
                <Image src="/sellerslogin-logo (1).svg" alt="Sellers Login" fill className="object-contain p-5" />
              </div>
            </div>

            {/* Floating Orbiting Icons */}
            {orbitingIcons.map((item, idx) => {
              const { Icon, color, top, left } = item;
              return (
                <div 
                  key={idx}
                  className="absolute z-10 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:scale-110 cursor-pointer"
                  style={{
                    top,
                    left,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${color}`} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
