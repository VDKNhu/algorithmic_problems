class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number) {
        const dp = Array.from({ length: m }, () => new Array(n).fill(-1));
        const dfs = (x: number, y: number): number => {
            if(x >= m || y >= n) {
                return 0;
            }
            if(x === m - 1 && y === n - 1) {
                return 1;
            }
            if(dp[x][y] !== -1) {
                return dp[x][y];
            } 
            return (dp[x][y] = dfs(x + 1, y) + dfs(x, y + 1));
        }
        return dfs(0, 0);
    }
}
