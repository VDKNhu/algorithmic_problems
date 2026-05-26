class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr: number[]) {
        const len = arr.length;
        const dp = Array.from({ length: len }, () => [-1, -1]);

        const dfs = (i: number, sign: boolean) => {
            const signIndex = sign ? 1 : 0;
            if(i === len - 1) {
                return 1;
            }
            if(dp[i][signIndex] !== -1) {
                return dp[i][signIndex];
            }

            let res = 1;
            if((sign && arr[i] > arr[i + 1]) || (!sign && arr[i] < arr[i + 1])) {
                res = 1 + dfs(i + 1, !sign);
            }
            return res;
        }

        let res = 1;
        for(let i = 0; i < len; i++) {
            res = Math.max(res, dfs(i, true), dfs(i, false));
        }
        return res;
    }
}
