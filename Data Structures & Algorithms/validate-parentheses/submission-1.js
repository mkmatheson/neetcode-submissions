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
    const stack = [];

    for (const char of s) {
        if (Object.values(pairs).includes(char)) {
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
