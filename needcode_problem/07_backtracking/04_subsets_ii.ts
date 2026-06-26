class Solution {
    res: number[][];
    constructor() {
        this.res = [];
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]) {    
        nums.sort((a: number, b: number) => a - b);
        this.backtrack(nums, 0, []);
        return this.res;
    }

    backtrack(nums: number[], i: number, subset: number[]) {
        this.res.push([... subset]);
        for(let j = i; j < nums.length; j++) {
            if(j > i && nums[j] === nums[j - 1]) {
                continue;
            }
            subset.push(nums[j]);
            this.backtrack(nums, j + 1, subset);
            subset.pop();
        }
    }
}
