class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s) {
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const openers = new Set(Object.values(pairs));
    const stack = [];
    

    for (const char of s) {
        if (openers.has(char)) {
            stack.push(char);
        } else {
            if (pairs[char] === stack.at(-1)) {
                stack.pop();
            } else {
                return false
            }

        }
    }
    return stack.length < 1;
}
}
