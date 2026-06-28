class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n: number, k: number) {
        const res: number[][] = [];

        const backtrack = (i: number, comb: number[]) => {
            if(i > n) {
                if(comb.length === k) {
                    res.push([...comb]);
                }
                return;
            }
            
            comb.push(i);
            backtrack(i + 1, comb);
            comb.pop();
            backtrack(i + 1, comb);
        }

        backtrack(1, []);
        return res;
    }

    // Instead of making include/exclude decisions, 
    // we iterate through available numbers and always include one. 
    // Starting from a given position ensures we never revisit smaller numbers, 
    // avoiding duplicates. We stop when the combination reaches size k.
    combineV2(n: number, k: number) {
        const res: number[][] = [];

        const backtrack = (i: number, comb: number[]) => {
            if(comb.length === k) {
                res.push([...comb]);
                return;
            }

            for(let j = i; j <= n; j++) {
                comb.push(j);
                backtrack(j + 1, comb);
                comb.pop();
            }
        }

        backtrack(1, []);
        return res;
    }
}
