const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\PricingPageContent.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] p-4 md:hidden bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
        <a href="#compare" className="flex w-full items-center justify-center rounded-full bg-violet-600 px-4 py-3.5 text-[13px] sm:text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all active:scale-[0.98] no-underline">
          Signup @ 999/ month (50% flat discount)
        </a>
      </div>
    </>
  );
}`;

content = content.replace(/    <\/>\s*\);\s*}\s*$/, replacement + '\n');
fs.writeFileSync(file, content, 'utf8');
