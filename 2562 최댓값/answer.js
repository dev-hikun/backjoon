const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];

const solve = () => {
  let max = Number.MIN_SAFE_INTEGER;
  let maxIndex = 0;
  arr.map((num, index) => {
    if (num > max) {
      maxIndex = index + 1;
      max = num;
    }
  });

  console.log(max);
  console.log(maxIndex);
};

rl.on("line", function (line) {
  arr.push(Number(line));
  if (arr.length === 9) {
    solve();
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
