const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (R, C) => {
  const mul = R*C;
  return `${Math.ceil(mul/2)} ${mul-1}`;
}

rl.on('line', (line) => input = line.split(' ').map(Number)).on('close', () => {
  console.log(solution(input[0], input[1]));
});