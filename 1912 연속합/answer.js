const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let index = 0;
let N = 0;

const solve = async (N, arr) => {
  const DP = [...arr];
  let max = DP[0];
  for(let i=1; i <= N; i++) {
    if(DP[i-1] > 0 && DP[i] + DP[i-1] > 0) {
      DP[i] += DP[i-1];
    }

    if(max < DP[i]) max = DP[i];
  }
  return max;
}

rl.on("line", function(line) {
  if(index === 0) {
    N = Number(line);
  }

  if(index === 1) {
    solve(N, line.split(' ').map((data) => Number(data))).then((result) => {
      console.log(result);
      rl.close();
    })
  }
  index++;
}).on("close", function() {
  process.exit();
});