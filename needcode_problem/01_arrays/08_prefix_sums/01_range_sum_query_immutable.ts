class NumArray {
    /**
     * @param {number[]} nums
     */
    prefix: number[];
    constructor(nums: number[]) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for(let i = 0; i < nums.length; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number) {
        return this.prefix[right + 1] - this.prefix[left];
    }
}
