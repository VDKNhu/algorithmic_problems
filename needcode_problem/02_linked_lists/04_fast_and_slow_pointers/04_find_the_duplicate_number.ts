class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    
    // Hash set approach
    findDuplicate(nums: number[]) {
        const freq = new Set();
        for(const num of nums) {
            if(freq.has(num)) {
                return num;
            }
            freq.add(num);
        }
        return -1;
    }

    // Negative marking approach
    findDuplicateV2(nums: number[]) {
        for(const num of nums) {
            const index = Math.abs(num) - 1;
            if(nums[index] < 0) {
                return Math.abs(num);
            }
            nums[index] *= -1;
        }
        return -1;
    }
}
