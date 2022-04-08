const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

const solution = (HWXY, B) => {
	const [H, W, X, Y] = HWXY;
	const A = new Array(B.length - X).fill(new Array(B[0].length - Y));

	let answer = '';
	for (let i = 0; i < H; i++) {
		for (let j = 0; j < W; j++) {
			B[i + X][j + Y] -= B[i][j];
			answer += `${B[i][j]} `;
		}
		answer += '\n';
	}
	return answer;
};

rl.on('line', (line) => input.push(line.split(' ').map(Number))).on(
	'close',
	() => {
		const [HWXY, ...B] = input;
		console.log(solution(HWXY, B));
	}
);
