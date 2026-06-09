const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\DemoCardsSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldBtn = 'className="flex w-full items-center justify-between rounded-full border-2 border-violet-950 py-2.5 pl-5 pr-2 font-semibold text-violet-950 transition-all hover:bg-red-600 hover:border-red-600 hover:text-white group"';
const newBtn = 'className="flex w-full items-center justify-between rounded-full py-2.5 pl-5 pr-2 font-semibold transition-all group bg-red-600 text-white hover:bg-red-700 shadow-md"';

const oldIcon = 'className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white transition-transform group-hover:bg-red-700 group-hover:text-white"';
const newIcon = 'className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600 transition-transform group-hover:scale-110"';

content = content.replace(new RegExp(oldBtn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newBtn);
content = content.replace(new RegExp(oldIcon.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newIcon);

fs.writeFileSync(file, content, 'utf8');
