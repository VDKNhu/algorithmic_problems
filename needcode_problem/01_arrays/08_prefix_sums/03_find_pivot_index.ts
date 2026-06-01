class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]) {
        const len = nums.length;
        const total = nums.reduce((acc: number, cur: number) => acc + cur, 0);
        let leftTotal = 0;
        for(let i = 0; i < len; i++) {
            if(total - nums[i] - leftTotal === leftTotal){
                return i;
            }
            leftTotal += nums[i];
        }
        return -1;
    }
}
