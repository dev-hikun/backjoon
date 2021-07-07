const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solve = () => {
  const maxNum = Math.floor(1000 % 42);
  const countArr = new Array(maxNum + 1);
  arr.map((remainder) => countArr[remainder] = countArr[remainder] !== undefined? countArr[remainder]+1 : 1);
  const length = countArr.filter((x) => x !== undefined && Number.isInteger(x)).length;
  console.log(length);
}

const arr = [];
rl.on("line", (input) => {
  arr.push((+input)%42);
  if(arr.length === 10) {
    solve();
    rl.close();
  }
}).on("close", () => {
  process.exit();
})