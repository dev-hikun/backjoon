const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 0;
let count = 0;
let N = 0;
let M = 0;

const getNumArr = (line) => line.split(" ").map((n) => +n);

const solve = async () => {
  let a = 1.0;
  let b = 1.0;

  for (let i = N; i > N - M; i--) {
    a *= i;
  }
  for (let i = M; i > 0; i--) {
    b *= i;
  }
  return a / b;
};

rl.on("line", function (line) {
  if (index === 0) {
    count = Number(line);
  } else {
    const input = getNumArr(line);
    N = input[0];
    M = input[1];

    solve().then((result) => {
      console.log(result);
    });

    if (index - 1 > count) {
      rl.close();
    }
  }
  index++;
}).on("close", function () {
  process.exit();
});
