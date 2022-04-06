const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => input = String(line)).on('close', () => {
  const answer = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, '1').split('');
  console.log(answer.length);
})