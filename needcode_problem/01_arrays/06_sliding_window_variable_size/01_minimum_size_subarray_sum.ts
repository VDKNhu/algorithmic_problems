class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]) {
        let res = Number.MAX_SAFE_INTEGER;
        let left = 0, total = 0;
        for(let right = 0; right < nums.length; right++) {
            total += nums[right];
            while(total >= target) {
                res = Math.min(res, right - left + 1);
                total -= nums[left];
                left++;
            }
        }
        return res === Number.MAX_SAFE_INTEGER ? 0 : res;
    }
}
