const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = [5, '55 185', '58 183', '88 186', '60 175', '46 155'];
const [N, ...A] = input;
const arr = A.map((s) => s.split(' ').map(Number));

let rank = [];
arr.forEach((a, i) => {
	let cnt = 1;
	arr.forEach((b, j) => {
		if (i !== j && a[0] < b[0] && a[1] < b[1]) cnt++;
	});
	rank.push(cnt);
});
console.log(rank.join('\n'));
