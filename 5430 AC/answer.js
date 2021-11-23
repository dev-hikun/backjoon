const R = require('readline');
const input = [];
R.createInterface({input:process.stdin,output:process.stdout}).on('line', (l) => input.push(l))
.on('close', (i = 0) => {
  const N = input[i++];
  const ans = [...Array(+N)].map(() => {
    const P = input[i++].trim();
    const n = +(input[i++].trim());
    const X = ((input[i++]).trim()).replace(/\[|\]/g, '').trim().split(',').map(Number);
    if(P.match(new RegExp(`D+`, 'g')).length > n) return 'error';
    let rCnt = 0;
    const res = P.split('').reduce((x, p) => {
      if(!Array.isArray(x) || !p) return false;
      if(p === 'D') return x.length > 0 ? (rCnt % 2 === 0 ? x.slice(1) : x.slice(0, x.length - 1)) : false;
      if(p === 'R') rCnt++;
      return x;
    }, X);
    return res? `[${rCnt%2===1? res.reverse() : res}]`:'error';
  });
  console.log(ans.join('\n').trim());
})