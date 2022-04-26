const R = require('readline');
const r = R.createInterface({input:process.stdin,output:process.stdout});
const input = [];
r.on('line', (l) => input.push(l)).on('close', () => {
  let [N, ...cmds] = input;
  delete N;
  const isNumber = (num) => Number.isInteger(num)? num : -1;
  let arr = [];
  const dic = {
    push_back: (n) => { arr.push(n) },
    push_front: (n) => { arr = [n, ...arr] },
    pop_front: () => isNumber(arr.shift()),
    pop_back: () => isNumber(arr.pop()),
    empty: () => Number(arr.length === 0),
    front: () => arr.length > 0 ? arr[0] : -1,
    back: () => arr.length > 0 ? arr[arr.length - 1] : -1,
    size: () => arr.length
  }
  cmds = cmds.map((cmd) => String(cmd).trim().split(' '));
  console.log(cmds.map(([cmd, num]) => {
    const func = dic[cmd];
    return func(num ? Number(num) : undefined);
  }).filter(x => x !== undefined).join('\n'));
  process.exit;
})