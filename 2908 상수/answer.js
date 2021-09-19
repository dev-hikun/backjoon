const R = require('readline');
const r = R.createInterface({input:process.stdin,output:process.stdout});
const reverse=(str)=>{ const arr = []; for(let i=0, j=str.length-1; i<str.length; i++, j--) arr[i] = str[j]; return arr.join(''); }
r.on('line',(s)=>{
  const a = s.split(' ').map((n) => +reverse(n));
  console.log(a[0] > a[1]? a[0] : a[1]);
  r.close();
}).on('close', process.exit);