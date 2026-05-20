class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    // dp top down
    longestCommonSubsequenceV1(text1: string, text2: string) {
        const len1 = text1.length, len2 = text2.length;
        const dp = Array.from({ length: len1 }, () => new Array(len2).fill(-1));
        const dfs = (x: number, y: number): number => {
            if(x >= len1 || y >= len2) {
                return 0;
            }
            if(dp[x][y] !== -1) {
                return dp[x][y];
            }
            if(text1[x] === text2[y]) {
                return (dp[x][y] = 1 + dfs(x + 1, y + 1));
            } else {
                return (dp[x][y] = Math.max(dfs(x + 1, y), dfs(x, y + 1)));
            }
        } 
        return dfs(0, 0);
    }

    // space optimized dp bottom up
    longestCommonSubsequenceV2(text1: string, text2: string) {
        if(text1.length < text2.length) {
            [text1, text2] = [text2, text1];
        }

        let prev = new Array(text2.length + 1).fill(0);
        let cur = new Array(text2.length + 1).fill(0);
        for(let i = text1.length - 1; i >= 0; i--) {
            for(let j = text2.length - 1; j >= 0; j--) {
                if(text1[i] === text2[j]) {
                    cur[j] = 1 + prev[j + 1];
                } else {
                    cur[j] = Math.max(cur[j + 1], prev[j]);
                }
            }
            [prev, cur] = [cur, prev];
        }
        return prev[0];
    }
}
