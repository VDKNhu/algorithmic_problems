class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    // The key insight is that if prefixSum[j] - prefixSum[i] = k, 
    // then the subarray from index i+1 to j has sum k. 
    // This transforms the problem: for each position, 
    // we want to count how many earlier positions have a prefix sum equal to currentPrefixSum - k.
    subarraySum(nums: number[], k: number) {
        let res = 0, curSum = 0;
        let prefixSums = new Map();
        prefixSums.set(0, 1);

        for(const num of nums) {
            curSum += num;
            const diff = curSum - k;
            res += prefixSums.get(diff) || 0;
            prefixSums.set(curSum, (prefixSums.get(curSum) || 0) + 1);
        }

        return res;
    }
}
