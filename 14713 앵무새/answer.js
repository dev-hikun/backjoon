const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, arr, words) => {
  const allWordsLength = arr.reduce((sum, cur) => sum + cur.length, 0);
  if(words.length !== allWordsLength) return false;

  return words.map((word) => {
    for(let i = 0; i < N; i++) {
      if(arr[i] && arr[i].includes(word)) {
        const str = arr[i].pop();
        if(str === word) return true;
      }
    }
    return false;
  }).every((x) => x);
}

rl.on('line', (line) => input.push(String(line))).on('close', () => {
  const N = Number(input[0]);
  const str = [];
  for(let i = 0; i < N; i++) {
    str.push(input[i+1].split(' ').reverse());
  }
  const L = input[N+1];

  console.log(solution(N, str, L.split(' '))? 'Possible' : 'Impossible');
});