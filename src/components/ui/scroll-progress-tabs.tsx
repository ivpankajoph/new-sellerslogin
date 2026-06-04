"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ScrollProgressTabsProps {
  tabs: TabItem[];
  className?: string;
}

export function ScrollProgressTabs({ tabs, className }: ScrollProgressTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = tabs.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // width of the progress bar
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * totalTabs);
    if (index >= totalTabs) index = totalTabs - 1;
    if (index < 0) index = 0;
    setActiveTab(index);
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${(totalTabs + 1) * 70}vh` }}
      className={cn("relative w-full", className)}
    >
      <div className="sticky top-24 w-full flex flex-col overflow-hidden items-center justify-start z-10" style={{ height: 'calc(100vh - 96px)' }}>
        
        {/* The Progress Strip */}
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-12 mb-8 pt-4">
          {/* Background Line */}
          <div className="absolute top-[36px] md:top-[44px] left-8 sm:left-16 right-8 sm:right-16 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
          
          {/* Animated Fill Line */}
          <div className="absolute top-[36px] md:top-[44px] left-8 sm:left-16 right-8 sm:right-16 h-1 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
               style={{ width: lineWidth }}
               className="h-full bg-purple-600 rounded-full origin-left"
             />
          </div>

          {/* Checkpoints */}
          <div className="relative z-10 flex justify-between items-center w-full">
            {tabs.map((tab, idx) => {
              const isActive = activeTab >= idx;
              const isCurrent = activeTab === idx;
              
              return (
                <div key={tab.id} className="flex flex-col items-center relative">
                  <div 
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base border-4 transition-all duration-300",
                      isActive 
                        ? "bg-purple-600 border-purple-200 text-white shadow-md scale-110" 
                        : "bg-white border-gray-200 text-gray-400"
                    )}
                  >
                    {idx + 1}
                  </div>
                  <div className={cn(
                    "absolute top-14 text-xs sm:text-sm font-semibold transition-colors duration-300 whitespace-nowrap",
                    isCurrent ? "text-purple-600" : (isActive ? "text-gray-900" : "text-gray-400")
                  )}>
                    {tab.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="w-full max-w-5xl mx-auto relative px-4 flex-1 mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-full absolute inset-0"
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
