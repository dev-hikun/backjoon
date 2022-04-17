단순 정렬문제

```Javascript
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = [3, '21 Junkyu', '21 Dohyun', '20 Sunyoung'];
const [N, ...A] = input;
const arr = A.map((s) => s.split(' '));
arr.sort((a, b) => a[0] - b[0]);
console.log(arr.map((p) => p.join(' ')).join('\n'));
```
