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
  const INF = 99999;
  const dist = Array(501).fill(INF);
  dist[1] = 0;

  // 모든 라인을 순회
  for (let n = 1; n <= N - 1; n++) {
    for (let [A, B, C] of graph) {
      if (dist[A] === INF) continue;
      const sum = dist[A] + C;
      if (dist[B] <= sum) continue;
      dist[B] = sum;
    }
  }

  // cycle 체크
  for (let n = 1; n <= N - 1; n++) {
    for (let [A, B, C] of graph) {
      if (dist[A] === INF) continue;
      const sum = dist[A] + C;
      if (dist[B] <= sum) continue;

      console.log("-1");
      return;
    }
  }

  for (let n = 2; n <= N; n++) {
    if (dist[n] === INF) console.log(-1);
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
