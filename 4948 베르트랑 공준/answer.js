const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
const solve = async (arr) => {
  for (let N of arr) {
    if(N === 0) break;
    if(N === 1) {
      console.log(1);
      continue;
    }

    const start = N+1;
    const last = N*2; 

    let cnt = 0;
    const arr = new Array(last + 1);
    arr.fill(true);
    
    for(let i=2; i <= Math.sqrt(arr.length); i++) {
      if(arr[i] === false) continue;
      for(let j = i*i; j <= arr.length; j += i) {
        if(arr[j]) arr[j] = false;
      }
    }

    for(let i=start; i<last; i++) if(arr[i] === true) cnt++;
    console.log(cnt);
  }
  return;
}


rl.on("line", function(line) {
  const N = Number(line);
  arr.push(N);
  if(Number(line) === 0) {
    solve(arr).then((result) => {
      rl.close();
    })
  }
}).on("close", function() {
  process.exit();
});