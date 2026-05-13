class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]) {
        const rows = grid.length, cols = grid[0].length;
        const visited = Array.from({length: rows}, () => new Array(cols).fill(false));
        
        const traversal = (r: number, c: number) => {
            if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0' || visited[r][c]) {
                return;
            }

            visited[r][c] = true;
            traversal(r + 1, c);
            traversal(r - 1, c);
            traversal(r, c + 1);
            traversal(r, c - 1);
        }

        let res = 0;
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === '0' || visited[r][c]) {
                    continue;
                }

                traversal(r, c);
                res++;
            }
        }
        return res;
    }
}
