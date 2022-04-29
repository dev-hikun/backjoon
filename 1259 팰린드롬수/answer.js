const { createInterface } = require('readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (A) => {
  const L = A.length;
  for(let i = 0; i < L/2; i++) {
    if(A[i] !== A[L-1-i]) return "no";
  }
  return "yes";
}

const input = [];
rl.on('line', (l) => input.push(l)).on('close', () => {
  const i = input.pop();
  if(input.length === 0 && i === '0') {
    console.log('yes');
    return;
  }
  console.log(input.map((n) => solution(String(n))).join('\n'));
});

