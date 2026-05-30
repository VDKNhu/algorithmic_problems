class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]) {
        let left = 0, right = 0;
        while(right < nums.length) {
            nums[left] = nums[right];
            while(right < nums.length && nums[left] === nums[right]) {
                right++;
            }
            left++;
        }
        return left;
    }
}
