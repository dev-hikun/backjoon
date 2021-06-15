const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let M = 0;
let A;
let DP = [];
let sum = 0;
let answer = [];

const getNumArr = (line) => {
  return line.split(" ").map((n) => Number(n));
};

const getSumArr = (line) => {
  return line.split(" ").map((n, i) => {
    sum += +n;
    DP[i] = sum;
    return +n;
  });
};

const solve = (line) => {
  const ranges = getNumArr(line);
  const startIndex = Math.min(ranges[0], ranges[1]) - 1;
  const lastIndex = Math.max(ranges[0], ranges[1]) - 1;

  if (startIndex === lastIndex) {
    answer.push(A[startIndex]);
    return;
  }

  let preSum = 0;
  if (startIndex > 0) preSum = DP[startIndex - 1];
  answer.push(DP[lastIndex] - preSum);
};

rl.on("line", function (line) {
  if (index === 0) {
    const data = getNumArr(line);
    M = data[1];
  } else if (index === 1) {
    A = getSumArr(line);
  } else if (index >= 2) {
    solve(line);
    if (index >= M + 1) rl.close();
  }
  index++;
}).on("close", function () {
  console.log(answer.join("\n"));
  process.exit();
});
