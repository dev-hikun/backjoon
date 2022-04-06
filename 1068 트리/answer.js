const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => input.push(String(line))).on('close', () => {
  const del = input[2];
  const arr = input[1].split(' ').map(Number);
  const DELETED = -2;
  
  const dfs = (del) => {
    arr[del] = DELETED;
    for(let i = 0; i < Number(input[0]); i++) {
      if(del == arr[i]) dfs(i);
    }
  };
  dfs(del);
  console.log(arr.filter((v, idx) => v != DELETED && !arr.includes(idx)).length);
});