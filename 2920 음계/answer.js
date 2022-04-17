const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
// let asc = [1, 2, 3, 4, 5, 6, 7, 0];
// let desc = [0, 7, 6, 5, 4, 3, 2, 1];

const solution = (input) => {
	// for (let i = 1; i < input.length; i++) {
	// 	if (input[i - 1] - 1 !== input[i]) {
	// 		for (let j = 1; j < input.length; j++) {
	// 			const a = input[j] % 8 === 0 ? 1 : input[j] % 8;
	// 			const b = input[j - 1] % 8;
	// 			if (a !== b) {
	// 				return 'mixed';
	// 			}
	// 		}
	// 		return 'ascending';
	// 	}
	// }
	// return 'desending';
	let asc = 0;
	let desc = 0;
	for (let i = 0; i < input.length - 1; i++) {
		const a = input[i];
		const b = input[i + 1];
		if (a - b === -1) asc++;
		else if (a - b === 1) desc++;
	}
	if (asc === 7) return 'ascending';
	else if (desc === 7) return 'descending';

	return 'mixed';
};
rl.on('line', (line) => (input = line.split(' ').map(Number))).on('close', () =>
	console.log(solution(input))
);
