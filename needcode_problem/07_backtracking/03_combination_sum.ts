class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number) {
        const res: number[][] = [];
        const cur: number[] = [];
        this.dfs(nums, target, cur, res, 0);
        return res;
    }

    dfs(nums: number[], target: number, cur: number[], res: number[][], index: number) {
        if(target === 0) {
            res.push([...cur]);
        } else if(target < 0 || index >= nums.length) {
            return;
        } else {
            cur.push(nums[index]);
            this.dfs(nums, target - nums[index], cur, res, index);
            cur.pop();
            this.dfs(nums, target, cur, res, index + 1);
        }
    }
}
