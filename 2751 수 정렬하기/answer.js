const fs = require('fs');
let input = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);
// const input = [5, 5, 4, 3, 2, 1];
const [N, ...num] = input;
console.log(num.sort((a, b) => a - b).join('\n'));
