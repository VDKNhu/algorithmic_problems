class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]) {
        const rows = grid.length, cols = grid[0].length;
        const visited = Array.from({length: rows}, () => new Array(cols).fill(false));
        
        const traversal = (r: number, c: number, area: number): number => {
            if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0 || visited[r][c]) {
                return 0;
            }

            visited[r][c] = true;
            return 1 + traversal(r + 1, c, area) + traversal(r - 1, c, area) + traversal(r, c + 1, area) + traversal(r, c - 1, area);
        }

        let res = 0;
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === 0 || visited[r][c]) {
                    continue;
                }

                res = Math.max(res, traversal(r, c, 0));
            }
        }
        return res;
    }
}
