const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const [blackBoard, whiteBoard] = (() => {
	let b = 'BWBWBWBWWBWBWBWB',
		w = 'WBWBWBWBBWBWBWBW';
	for (let i = 0; i < 3; i++) {
		b += b;
		w += w;
	}
	return [Array.from(b), Array.from(w)];
})();

const boardToString = (board, X, Y) => {
	const [row, col] = [X + 8, Y + 8];
	let result = '';
	for (let i = X; i < row; i++) {
		for (let j = Y; j < col; j++) {
			result += board[i][j];
		}
	}
	return result;
};

const diff = (strBoard) => {
	let b = 0;
	let w = 0;
	let board = Array.from(strBoard);
	board.forEach((s, i) => {
		s !== blackBoard[i] && b++;
		s !== whiteBoard[i] && w++;
	});
	return [b, w];
};

const input = [];
rl.on('line', (line) => input.push(line)).on('close', () => {
	const [NM, ...board] = input;
	const [X, Y] = NM.split(' ').map((x) => Number(x) - 8);
	const originBoard = board.map((s) => Array.from(s));
	let result = Number.MAX_VALUE;
	for (let i = 0; i <= X; i++) {
		for (let j = 0; j <= Y; j++) {
			result = Math.min(
				result,
				Math.min(...diff(boardToString(originBoard, i, j)))
			);
		}
	}
	console.log(result === Number.MAX_VALUE ? 0 : result);
});
