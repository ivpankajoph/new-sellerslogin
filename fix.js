const fs = require('fs');
const logPath = 'C:\\\\Users\\\\Admin\\\\.gemini\\\\antigravity\\\\brain\\\\3fd68e40-6ce9-412f-adef-4b8c1233f15d\\\\.system_generated\\\\logs\\\\transcript.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

const lineMap = new Map();
let found1 = false;
let found2 = false;

for (const line of lines) {
    if (!line) continue;
    try {
        const data = JSON.parse(line);
        if (data.source === 'MODEL' && data.type === 'VIEW_FILE' && data.content && data.content.includes('page.tsx')) {
            const contentLines = data.content.split('\n');
            
            if (!found1 && data.content.includes('Showing lines 1 to 800')) {
                found1 = true;
                for (const cl of contentLines) {
                    const match = cl.match(/^(\d+): (.*)$/);
                    if (match) lineMap.set(parseInt(match[1]), match[2]);
                    else if (cl.match(/^(\d+):$/)) lineMap.set(parseInt(cl.match(/^(\d+):$/)[1]), '');
                }
            }
            if (!found2 && data.content.includes('Showing lines 800 to 1387')) {
                found2 = true;
                for (const cl of contentLines) {
                    const match = cl.match(/^(\d+): (.*)$/);
                    if (match) lineMap.set(parseInt(match[1]), match[2]);
                    else if (cl.match(/^(\d+):$/)) lineMap.set(parseInt(cl.match(/^(\d+):$/)[1]), '');
                }
            }
        }
    } catch (e) {}
}

const maxLine = Math.max(...Array.from(lineMap.keys()));
console.log('Max line:', maxLine);

if (maxLine > 1000) {
    let fullText = '';
    for (let i = 1; i <= maxLine; i++) {
        fullText += (lineMap.get(i) !== undefined ? lineMap.get(i) : '') + '\n';
    }
    
    // NOW DO EXACT STRING REPLACEMENTS!
    fullText = fullText.replace('import { ChevronDown, Search } from "lucide-react";', 'import { ChevronDown, Search, Check } from "lucide-react";');
    
    fullText = fullText.replace(
        '  const emailOtpRefs = useRef<(HTMLInputElement | null)[]>([]);\n\n  useEffect(() => {\n    let isMounted = true;',
        '  const emailOtpRefs = useRef<(HTMLInputElement | null)[]>([]);\n\n  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);\n  const [selectedPlanPrice, setSelectedPlanPrice] = useState<string | null>(null);\n\n  useEffect(() => {\n    if (typeof window !== "undefined") {\n      setSelectedPlanName(localStorage.getItem("selectedPlanName"));\n      setSelectedPlanPrice(localStorage.getItem("selectedPlanPrice"));\n    }\n  }, []);\n\n  useEffect(() => {\n    let isMounted = true;'
    );
    
    const targetMain = '      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">\n        <section className="border border-slate-200 bg-white p-8 sm:p-10">';
    
    const replacementMain = '      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">\n        {selectedPlanName && selectedPlanPrice && (\n          <div className="lg:col-span-2 bg-violet-50 border border-violet-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">\n            <div className="flex items-center gap-4">\n              <div className="bg-violet-600 text-white rounded-full p-2.5 shadow-md shadow-violet-200">\n                <Check className="h-5 w-5" strokeWidth={3} />\n              </div>\n              <div>\n                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Selected Plan</p>\n                <p className="text-xl font-black text-slate-900 mt-0.5">{selectedPlanName} <span className="text-slate-500 font-semibold text-lg ml-1">at {selectedPlanPrice}</span></p>\n              </div>\n            </div>\n            <Link href="/pricing" className="text-sm font-bold text-violet-700 hover:text-violet-800 bg-white border border-violet-200 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all">\n              Change Plan\n            </Link>\n          </div>\n        )}\n        \n        <section className="border border-slate-200 bg-white p-8 sm:p-10">';
        
    fullText = fullText.replace(targetMain, replacementMain);
    
    fs.writeFileSync('c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\app\\\\vendor\\\\registration\\\\page.tsx', fullText, 'utf8');
    console.log('File restored and modified successfully.');
} else {
    console.log('Failed to find all lines');
}
