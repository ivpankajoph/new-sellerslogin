const fs = require('fs');
const path = 'C:\\\\oph work\\\\new-sellerslogin\\\\.next\\\\dev\\\\static\\\\chunks\\\\src_0tidkfc._.js';
const content = fs.readFileSync(path, 'utf8');

const m = content.indexOf('export default function VendorRegistrationPage()');
if (m > -1) {
    console.log('Found VendorRegistrationPage at index', m);
    console.log(content.substring(m, m + 2000));
} else {
    console.log('Not found direct match. Trying regex...');
}

const match = content.match(/VendorRegistrationPage/g);
if (match) {
    console.log('Found VendorRegistrationPage', match.length, 'times');
}
