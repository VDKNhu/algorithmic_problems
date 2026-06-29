class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums: number[]) {
        const len = nums.length;
        const res: Set<string> = new Set();
        const visited = new Array(len).fill(false);

        const backtrack = (perm: number[]) => {
            if(perm.length === nums.length) {
                res.add(JSON.stringify(perm));
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
        return Array.from(res).map(str => JSON.parse(str));
    }

    // This approach generates permutations by swapping elements in place 
    // rather than building a separate permutation array. 
    // At each position i, we try placing each element from index i onward. 
    // By sorting first and skipping swaps that would place a duplicate value at position i, 
    // we avoid generating duplicate permutations.
    // After each recursive call, we restore the array to its sorted state 
    // for position i by reverse-swapping all elements back.
    permuteUniqueV2(nums: number[]) {
        const len = nums.length;
        const res: number[][] = [];
        nums.sort((a, b) => a - b);

        const dfs = (i: number) => {
            if(i === len) {
                res.push([...nums]);
                return;
            }

            for(let j = i; j < len; j++) {
                if(j > i && nums[i] === nums[j]) {
                    continue;
                }

                [nums[i], nums[j]] = [nums[j], nums[i]];
                dfs(i + 1);
            }

            for(let j = len - 1; j > i; j--) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        dfs(0);
        return res;
    }
}
