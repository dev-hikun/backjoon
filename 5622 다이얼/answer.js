const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';
rl.on('line', (line) => input = line)
.on('close', () => {
  const A = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  console.log(input.split('').reduce((sum, cur) => {
    const i = A.findIndex((x) => x.includes(cur));
    if(i > -1) sum += (i + 3);
    return sum;
  },0));
})