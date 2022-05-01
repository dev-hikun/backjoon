const { createInterface } = require('readline');
const {stdin: input, stdout: output} = process;

const A = [];
createInterface({ input, output })
  .on('line', (l) => A.push(l))
  .on('close', () => {
    const [N, has, __, line] = A;

    const arr = [];
    const hasNumber = has.split(' ').map(Number);
    for(let i = 0; i < N; i++) {
      const n = hasNumber[i];
      const frontIdx = n > 0 ? 1 : 0;
      if(!arr[frontIdx]) arr[frontIdx] = [];
      arr[frontIdx][n] = (arr[frontIdx][n] || 0) + 1;
    }

    const answer = line.split(' ').map((n) => arr[Number(n) > 0? 1 : 0][+n] || 0);
    console.log(answer.join(' '));
  });