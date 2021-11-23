const R = require('readline');
const input = [];
R.createInterface({input:process.stdin,output:process.stdout})
  .on('line', (l) => input.push(l))
  .on('close', () => {
    let i = 0;
    const N = +input[i++];
    const str = [...Array(N)].map(() => String(input[i++]));
    const answer = str.reduce((cnt, cur) => {
      const isGroup = cur.split('').reduce((arr, char, i) => {
        if(!arr) return false;
        const c = char.charCodeAt() - 97;
        if(arr[c] === 1) 
          if(cur[i-1] === char) return arr;
          else return false;
        arr[c] = 1;
        return arr;
      }, []);
      return isGroup ? cnt+1 : cnt;
    }, 0);
    console.log(answer);
  })