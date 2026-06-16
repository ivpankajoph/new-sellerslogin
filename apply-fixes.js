const fs = require('fs');

const filePath = 'src/app/vendor/registration/business-details/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Import Check
if (!content.includes('Check }')) {
  content = content.replace('import { ChevronDown, Search } from "lucide-react";', 'import { ChevronDown, Search, Check } from "lucide-react";');
}

// 2. Add Selected Plan States
if (!content.includes('selectedPlanNameState')) {
  content = content.replace(
    '  const [countriesError, setCountriesError] = useState<string | null>(null);',
    `  const [countriesError, setCountriesError] = useState<string | null>(null);

  const [selectedPlanNameState, setSelectedPlanNameState] = useState<string | null>(null);
  const [selectedPlanPriceState, setSelectedPlanPriceState] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedPlanNameState(sessionStorage.getItem("selectedPlanName"));
      setSelectedPlanPriceState(sessionStorage.getItem("selectedPlanPrice"));
    }
  }, []);`
  );
}

// 3. Add redirect useEffect
if (!content.includes('router.push(redirectTargetUrl)')) {
  content = content.replace(
    /const redirectTimerRef = useRef.*?\n\n  useEffect\(\(\) => \{\n    return \(\) => \{\n      if \(redirectTimerRef\.current\) \{\n        clearInterval\(redirectTimerRef\.current\);\n        redirectTimerRef\.current = null;\n      \}\n    \};\n  \}, \[\]\);/g,
    `const redirectTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) {
        clearInterval(redirectTimerRef.current);
        redirectTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (redirectProgress >= 100 && redirectTargetUrl) {
      router.push(redirectTargetUrl);
    }
  }, [redirectProgress, redirectTargetUrl, router]);`
  );
}

// 4. Remove adminRedirectUrl & Razorpay block
// Remove adminRedirectUrl definition
content = content.replace(
  /const adminRedirectUrl = buildAdminAutoLoginUrl\(\{[\s\S]*?vendor: vendorData,\n\s*\}\);/,
  ''
);

// Remove RAZORPAY INTEGRATION block
content = content.replace(
  /\/\/ RAZORPAY INTEGRATION START[\s\S]*?\/\/ RAZORPAY INTEGRATION END/,
  ''
);

// 5. Update submit success redirect logic
content = content.replace(
  /setRedirectTargetUrl\(adminRedirectUrl\);/,
  'setRedirectTargetUrl("/vendor/registration/payment");'
);

content = content.replace(
  /if \(redirectTimerRef\.current\) \{\n\s*clearInterval\(redirectTimerRef\.current\);\n\s*redirectTimerRef\.current = null;\n\s*\}\n\s*window\.location\.replace\(adminRedirectUrl\);\n\s*\}/,
  `if (redirectTimerRef.current) {
                  clearInterval(redirectTimerRef.current);
                  redirectTimerRef.current = null;
                }
              }`
);

// 6. Add PricingSummaryBar UI
if (!content.includes('lg:col-span-2 border border-slate-200 p-3 flex flex-col')) {
  content = content.replace(
    '<main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">\n        <section className="border border-slate-200 bg-white p-8 sm:p-10">',
    `<main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {selectedPlanNameState && selectedPlanNameState !== "null" && selectedPlanPriceState && selectedPlanPriceState !== "null" && (
          <div className="lg:col-span-2 border border-slate-200 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-violet-600 text-white rounded p-1.5 shadow-sm">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Selected Plan</p>
                <p className="text-base font-bold text-slate-900 leading-none">{selectedPlanNameState} <span className="text-slate-500 font-medium text-sm ml-1">at {selectedPlanPriceState} + GST</span></p>
              </div>
            </div>
            <Link href="/pricing" className="text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-300 px-4 py-1.5 rounded-none shadow-sm hover:shadow transition-all bg-white">
              Change Plan
            </Link>
          </div>
        )}
        <section className="border border-slate-200 bg-white p-8 sm:p-10">`
  );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixes applied successfully!');
