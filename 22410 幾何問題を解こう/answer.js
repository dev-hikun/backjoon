const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); 

const solution = (R, C) => {
  const n = gcd(R, C);
  let q = C/n;
  const limit = Math.floor(Math.sqrt(q)) + 1;
  const isPrime = new Array(limit+1).fill(true).fill(false, 0, 2);

  for(let i = 2; i*i<=limit; i++) {
    if(isPrime[i]) {
      for(let j=i*i; j<=limit; j+=i) {
        isPrime[j] = false;
      }
    }
  }
  const primes = isPrime.reduce((arr,now,i) => now? [...arr, i] : arr, []);

  const answerSheet = [];
  let isDivisible = false;
  primes.forEach((p) => {
    while(q % p == 0) {
      isDivisible = true;
      q /= p ;
      answerSheet.push(p);
    }
  });

  if(!isDivisible){
    console.log(q);
    return;
  }
  
  console.log([...new Set(answerSheet)].reduce((ans, cur) => ans * cur, q));
}

rl.on('line', (line) => input = line.split(' ').map(Number)).on('close', () => {
  solution(input[0], input[1]);
});