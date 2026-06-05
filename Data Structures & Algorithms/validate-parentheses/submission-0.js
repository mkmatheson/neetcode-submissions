class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const starts = new Set(['(', '{', '['])
    const stack = [];

    for (const char of s) {
        if (starts.has(char)) {
            stack.push(char);
        } else {
            if (char === ')') {
                if (stack.at(-1) === '(') {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (char === '}') {
                if (stack.at(-1) === '{') {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (char === ']') {
                if (stack.at(-1) === '[') {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    return stack.length < 1;
    }
}
