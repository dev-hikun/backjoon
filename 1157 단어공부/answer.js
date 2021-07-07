const R = require('readline');
const r = R.createInterface({input:process.stdin,output:process.stdout});

r.on('line', (str)=>{
  const length = str.length;
  const arr = new Array(26).fill(0);

  for(let i = 0; i<length; i++) {
    let code = str.charCodeAt(i) - 65;
    code = code >= 32? code-32 : code;
    arr[code]++;
  }
  
  const max = Math.max(...arr);
  const answerArr = arr.reduce((arr, x, i) => x === max? [...arr, String.fromCharCode(i+65)] : arr, []);
  console.log(answerArr.length === 1 ? answerArr.pop().toUpperCase() : '?');
  r.close();
}).on('close', process.exit)