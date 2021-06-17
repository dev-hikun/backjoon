const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineIndex = 0;
let N = 1;
let M = 1;
let graph = [];

const getNumArr = (line) => line.split(" ").map((n) => +n);

const solve = () => {
  const dist = Array(N).fill(Infinity);
  dist[1] = 0;
  let cycle = false;

  // 모든 라인을 순회
  for (let n = 1; n < N; n++) {
    for (let [A, B, C] of graph) {
      if (dist[A] === Infinity) continue;
      const sum = dist[A] + C;
      if (dist[B] <= sum) continue;
      dist[B] = sum;
      isUpdated = true;
      if (n === N - 1) {
        console.log(-1);
        return;
      }
    }
  }

  for (let n = 2; n <= N; n++) {
    if (dist[n] === Infinity) console.log(-1);
    else console.log(dist[n]);
  }
};

rl.on("line", function (line) {
  if (lineIndex === 0) {
    const MN = getNumArr(line);
    N = MN[0];
    M = MN[1];
  } else {
    graph.push(getNumArr(line));
    if (lineIndex + 1 > M) {
      solve();
      rl.close();
    }
  }
  lineIndex++;
}).on("close", function () {
  process.exit();
});
