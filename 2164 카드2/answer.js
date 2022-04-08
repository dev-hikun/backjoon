const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

class Queue {
	constructor() {
		this.storage = {};
		this.front = 0;
		this.rear = 0;
	}

	size() {
		if (!this.storage[this.rear]) {
			return 0;
		}
		return this.rear - this.front + 1;
	}

	append(value) {
		if (this.size() === 0) this.storage[0] = value;
		else {
			this.rear += 1;
			this.storage[this.rear] = value;
		}
	}

	popleft() {
		let temp;
		if (this.front === this.rear) {
			temp = this.storage[this.front];
			delete this.storage[this.front];
			this.front = 0;
			this.rear = 0;
		} else {
			temp = this.storage[this.front];
			delete this.storage[this.front];
			this.front += 1;
		}
		return temp;
	}
}

let N = 0;
rl.on('line', (line) => (N = Number(line))).on('close', () => {
	const Q = new Queue();
	for (let i = 1; i <= N; i++) Q.append(i);

	while (Q.size() !== 1) {
		Q.popleft();
		Q.append(Q.popleft());
	}
	console.log(Q.popleft());
});
