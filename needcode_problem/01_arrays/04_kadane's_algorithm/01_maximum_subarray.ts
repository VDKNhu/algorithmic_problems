class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]) {
        let maxSum = nums[0], curSum = 0;
        for(const num of nums) {
            curSum = Math.max(curSum, 0);
            curSum += num;
            maxSum = Math.max(maxSum, curSum);
        }
        return maxSum;
    }
}
