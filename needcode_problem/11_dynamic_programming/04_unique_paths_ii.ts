class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid: number[][]) {
        if(grid[0][0] === 1) {
            return 0;
        }

        const rows = grid.length, cols = grid[0].length;
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));
        const dfs = (x: number, y: number): number => {
            if(x >= rows || y >= cols || grid[x][y] === 1) {
                return 0;
            }
            if(x === rows - 1 && y === cols - 1) { 
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
