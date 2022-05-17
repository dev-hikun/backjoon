const { createInterface } = require('readline');
const {stdin: input, stdout: output, exit} = process;

const f = (cur, max, n) => {
  if(cur === max) {
    console.log(n);
    exit();
  }

  if(cur * 2 <= max) f(cur*2, max, n+1);
  if(cur + '1' <= max) f(Number(cur+'1'), max, n+1);
}

createInterface({ input, output }).on('line', (l) => {
  const [A, B] = l.split(' ').map(Number);
  f(A, B, 1);
  console.log(-1);
  exit();
})