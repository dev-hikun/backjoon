const RL = require('readline');
const rl = RL.createInterface({input:process.stdin,output:process.stdout});

let loopTimes = 0;
let index = 0;
const answer = [];
rl.on('line', (str)=>{
  if(loopTimes === 0) {
    loopTimes = +str;
    return;
  }
  let sum = 0;
  const arr = [];
  for(let i = 0; i < str.length; i++){
    const x = str[i];
    if(x==='O') {
      for(let j = i-1; j >= 0; j--) {
        if(arr[j] === "X") break;
        sum++;
      }
      sum++;
    }
    arr.push(x);
  }
  answer.push(sum);
  
  if(++index === loopTimes){
    console.log(answer.join('\n'));
    rl.close();
  } 
}).on('close', process.exit)