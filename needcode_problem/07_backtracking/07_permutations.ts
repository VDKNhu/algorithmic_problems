class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]) {
        const len = nums.length;
        const res: number[][] = [];
        const visited = new Array(len).fill(false);

        const backtrack = (perm: number[]) => {
            if(perm.length === len) {
                res.push([...perm]);
                return;
            }

            for(let i = 0; i < len; i++) {
                if(!visited[i]) {
                    perm.push(nums[i]);
                    visited[i] = true;
                    backtrack(perm);
                    perm.pop();
                    visited[i] = false;
                }
            }
        }

        backtrack([]);
        return res;
    }
}
