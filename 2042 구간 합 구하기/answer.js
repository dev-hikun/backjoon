const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const getNumArr = (str) => str.split(' ').map(Number);

class PrefixSumTree {
  constructor(numbers) {
    // 숫자 갯수
    this.n = numbers.length;
    // 익후가 2n+1로 만들라고 함
    this.prefixSumArr = [...Array(2 * this.n + 1)];
    // 트리에 구간합 저장
    this.init(numbers);
  }

  init = (numbers, i = 0, startIndex = 0, endIndex = this.n - 1) => {
    // 노드범위의 시작,끝 같으면 i 위치에 숫자 저장 후 반환
    if (startIndex === endIndex) return (this.prefixSumArr[i] = numbers[startIndex]);
    
    // 아니면 반으로 나누어서 구간 숫자 합을 다시 구함 (top down)
    const mid = this.getMid(startIndex, endIndex);
    const leftPrefixSum = this.init(numbers, i * 2 + 1, startIndex, mid);
    const rightPrefixSum = this.init(numbers, i * 2 + 2, mid + 1, endIndex);
    return (this.prefixSumArr[i] = leftPrefixSum + rightPrefixSum);
  }

  patch = (newIndex, newNum, i = 0, startIndex = 0, endIndex = this.n - 1) => {
    // newIndex 위치가 구간에 없을 때
    if (newIndex < startIndex || newIndex > endIndex) return this.prefixSumArr[i];
    

    // 노드 범위의 시작,끝 같으면 i 위치에 숫자 저장후 반환
    if(startIndex === endIndex) return (this.prefixSumArr[i] = newNum);
    

    // 반으로 나눠서 재귀하며 갱신 (top down)
    const mid = this.getMid(startIndex, endIndex);
    const leftPrefixSum = this.patch(newIndex, newNum, i * 2 + 1, startIndex, mid);
    const rightPrefixSum = this.patch(newIndex, newNum, i * 2 + 2, mid + 1, endIndex);

    return (this.prefixSumArr[i] = leftPrefixSum + rightPrefixSum);
  }

  getSum = (from, to, i = 0, startIndex = 0, endIndex = this.n - 1) => {
    // newIndex 위치가 구간에 없을 때
    if (from > endIndex || to < startIndex) return 0;
    
    if (from <= startIndex && to >= endIndex) return this.prefixSumArr[i];

    // 이외 케이스는 재귀하여 값 구함
    const mid = this.getMid(startIndex, endIndex);
    const leftPrefixSum = this.getSum(from, to, i * 2 + 1, startIndex, mid);
    const rightPrefixSum = this.getSum(from, to, i * 2 + 2, mid + 1, endIndex);
    return leftPrefixSum + rightPrefixSum;
  }

  getMid = (start, end) => Math.floor((start + end) / 2);
}

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let i = 0;
  const [N, M, K] = getNumArr(input[i++]);
  const numbers = [...Array(N)].map(() => Number(input[i++]));
  const prefixSumTree = new PrefixSumTree(numbers);
  

  let x = M + K;
  const result = [];
  while(x--) {
    const [a, b, c] = getNumArr(input[i++]);
    // a === 1 일 때, b번째 수를 c로 바꿔라
    if(a === 1) {
      prefixSumTree.patch(b - 1, c);
      continue;
    }
    // a === 2일 때 b번째 수부터 c번째 수까지 합을 구하여 result에 저장
    result.push(prefixSumTree.getSum(b - 1, c - 1))
  }
  // 저장된 result 출력
  console.log(result.join('\n'));
})