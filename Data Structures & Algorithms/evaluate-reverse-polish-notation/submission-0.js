const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => Math.trunc(a / b);
const ops = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

evalRPN(tokens){
    if (tokens.length === 1 && !ops.hasOwnProperty(tokens[0])) {
        return parseInt(tokens[0]);
    }
    const stack = [];
    for (const token of tokens) {
        if (ops.hasOwnProperty(token)) {
            const b = stack.pop();
            const a = stack.pop();
            const result = ops[token](a, b)
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[stack.length - 1];
};
}
