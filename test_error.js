const { spawn } = require('child_process');
const http = require('http');

const child = spawn('npm.cmd', ['run', 'dev', '--', '-p', '3006'], {
  cwd: process.cwd(),
  stdio: 'pipe'
});

child.stdout.on('data', (data) => {
  process.stdout.write(`STDOUT: ${data}`);
});

child.stderr.on('data', (data) => {
  process.stderr.write(`STDERR: ${data}`);
});

setTimeout(() => {
  console.log('Fetching http://localhost:3006/pricing/b2c');
  http.get('http://localhost:3006/pricing/b2c', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`Response Status: ${res.statusCode}`);
      console.log(`Response Body: ${data}`);
      setTimeout(() => {
        child.kill();
        process.exit(0);
      }, 1000);
    });
  }).on('error', (err) => {
    console.error(`Fetch Error: ${err.message}`);
    child.kill();
    process.exit(1);
  });
}, 10000);
