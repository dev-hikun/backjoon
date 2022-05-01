const { createInterface } = require('readline');
const { stdin, stdout } = process;
const A = [];

createInterface({ input: stdin, output: stdout }).on('line', (l) => A.push(l))
  .on('close', () => {
    const bracket = {'(': ')', '[': ']'};
    console.log(A.filter((s) => s != '.').map((p) => {
      const stack = [];
      p = p.trim();
      for(const char of p.trim()) {
        if(char === '(' || char === '[') stack.push(char);
        else if((char === ')' || char === ']') && bracket[stack.pop()] !== char) {
          return "no";
        }
      }

      if(stack.length === 0) return "yes";
      return "no";
    }, []).join('\n'));
  });