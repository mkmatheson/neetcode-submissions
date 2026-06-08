class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

         if(temperatures.length < 2){
        return [0];
    }
    // output array as distance between a temperature and a temperature hotter than it
    const output = Array(temperatures.length).fill(0);
    const stack = [[temperatures[0], 0]];
    for(let i = 1; i < temperatures.length; i++){
        while(stack.length > 0 && stack.at(-1)[0] < temperatures[i]){
            const stackIdx = stack.at(-1)[1];
            output[stackIdx] = i - stackIdx;
            stack.pop()
        }
        stack.push([temperatures[i], i])
    }
    return output;
    }
}
