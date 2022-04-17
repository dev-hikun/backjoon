const fs = require('fs');
let N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let check = 0;
for (let i = 665; true; i++) {
	if (String(i).includes('666')) check++;
	if (check === N) {
		console.log(i);
		break;
	}
}
