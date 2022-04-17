const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];
rl.on('line', (line) => input.push(line)).on('close', () => {
	const [N, ...arr] = input;
	let max = -9999;
	let min = 9999;
	arr.forEach((s) => {
		max = s.length > max ? s.length : max;
		min = s.length < min ? s.length : min;
	});

	const sorted = [];
	for (let i = min; i <= max; i++) {
		const group = [];
		arr.forEach((s) =>
			s.length === i && !group.includes(s) ? group.push(s) : ''
		);
		sorted.push(...(group.length ? group.sort() : group));
	}
	console.log(sorted.join('\n'));
});
