스택의 특성을 알아야 풀 수 있는 문제.
or javascript pop 알면 그냥 품

```Javascript
const fs = require('fs');
// let i = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const i = [10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6];
// const i = [4, 3, 0, 4, 0];
const [_, ...A] = i;
const arr = [];
A.map(Number).forEach((n) => (n ? arr.push(n) : arr.pop()));
let s = 0;
arr.forEach((n) => (s += n));
console.log(s);

```
