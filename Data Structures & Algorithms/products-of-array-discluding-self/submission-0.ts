class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
    const prefixArray = Array(nums.length), suffixArray = Array(nums.length);
    let prefixValue = 1, suffixValue = 1;
    for(let i = 0; i < nums.length; i++){
        prefixArray[i] = prefixValue;
        prefixValue = prefixValue * nums[i];

        const suffixIndex = nums.length - i - 1
        suffixArray[suffixIndex] = suffixValue
        suffixValue = suffixValue * nums[suffixIndex];
    }
    return prefixArray.map((prefixValue, i) => prefixValue * suffixArray[i])
};
}
