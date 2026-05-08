class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]) {        
        const res: number[][] = [];
        const subset: number[] = [];
        this.dfs(nums, 0, subset, res);
        return res;
    }

    dfs(nums: number[], i: number, subset: number[], res: number[][]) {
        if(i >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);
        subset.pop();
        this.dfs(nums, i + 1, subset, res);
    }
}
