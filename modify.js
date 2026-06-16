const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\app\\\\vendor\\\\registration\\\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Check icon
content = content.replace(
    'import { ChevronDown, Search } from "lucide-react";',
    'import { ChevronDown, Search, Check } from "lucide-react";'
);

// 2. Add state and effect before the first useEffect
const targetState = '  const emailOtpRefs = useRef<(HTMLInputElement | null)[]>([]);\n\n  useEffect(() => {\n    let isMounted = true;';
const replacementState = '  const emailOtpRefs = useRef<(HTMLInputElement | null)[]>([]);\n\n  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);\n  const [selectedPlanPrice, setSelectedPlanPrice] = useState<string | null>(null);\n\n  useEffect(() => {\n    if (typeof window !== "undefined") {\n      setSelectedPlanName(sessionStorage.getItem("selectedPlanName"));\n      setSelectedPlanPrice(sessionStorage.getItem("selectedPlanPrice"));\n    }\n  }, []);\n\n  useEffect(() => {\n    let isMounted = true;';

if (!content.includes(targetState)) {
    console.log("Could not find targetState!");
} else {
    content = content.replace(targetState, replacementState);
}

// 3. Add Banner inside main
const targetMain = '      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">\n        <section className="border border-slate-200 bg-white p-8 sm:p-10">';
const replacementMain = `      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {selectedPlanName && selectedPlanPrice && (
          <div className="lg:col-span-2 bg-violet-50 border border-violet-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-violet-600 text-white rounded-full p-2.5 shadow-md shadow-violet-200">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Selected Plan</p>
                <p className="text-xl font-black text-slate-900 mt-0.5">{selectedPlanName} <span className="text-slate-500 font-semibold text-lg ml-1">at {selectedPlanPrice}</span></p>
              </div>
            </div>
            <Link href="/pricing" className="text-sm font-bold text-violet-700 hover:text-violet-800 bg-white border border-violet-200 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all">
              Change Plan
            </Link>
          </div>
        )}
        
        <section className="border border-slate-200 bg-white p-8 sm:p-10">`;

if (!content.includes(targetMain)) {
    console.log("Could not find targetMain!");
} else {
    content = content.replace(targetMain, replacementMain);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Modified successfully.');
