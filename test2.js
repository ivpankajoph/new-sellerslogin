const fs = require('fs');
const path = 'C:\\\\oph work\\\\new-sellerslogin\\\\.next\\\\dev\\\\static\\\\chunks\\\\src_0tidkfc._.js';
if (!fs.existsSync(path)) { console.log('File not found'); process.exit(1); }
const content = fs.readFileSync(path, 'utf8');

const regex = /This inbox will receive registration updates/g;
const matches = content.match(regex);
console.log('Matches length:', matches ? matches.length : 0);

const vendorMatch = content.match(/export default function VendorRegistrationPage/);
if (vendorMatch) {
    console.log('Found VendorRegistrationPage in chunk');
}

// Let's write the whole chunk to a txt file so I can inspect it
fs.writeFileSync('C:\\\\oph work\\\\new-sellerslogin\\\\chunk_dump.txt', content);
console.log('Dumped chunk to chunk_dump.txt');
