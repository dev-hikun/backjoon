const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on('line', (line) => (input = line.split(' ').map(Number))).on('close', () =>
	console.log(input.reduce((sum, cur) => sum + (Math.pow(cur, 2) % 10), 0) % 10)
);
