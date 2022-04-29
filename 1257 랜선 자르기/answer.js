const { createInterface } = require('readline');
const A = [];
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (l) => A.push(l)).on('close', () => {
  const [ _, N ] = A.shift().split(' ').map(Number);
  let lines = A.map(Number).sort();

  let min = 1;
  let max = Math.max(...lines);
  while(min <= max) {
    const mid = parseInt((min + max) / 2);
    const pieces = lines.map((line) => parseInt(line / mid)).reduce((S, c) => S + c, 0);
    if(pieces >= N) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(max);
})