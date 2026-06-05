class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
          const numSet = new Set(nums);
    let longestSequence = 0;
    for(const num of nums){
        if(!numSet.has(num - 1)){
            let i = 1;
            let newSequenceLength = 1
            while(numSet.has(num + i)){
                newSequenceLength++
                i++
            }
            if(newSequenceLength > longestSequence){
                longestSequence = newSequenceLength;
            }
        }
    }

    return longestSequence;
    }
}
