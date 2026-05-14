class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]) {
        const rows = grid.length, cols = grid[0].length;
        let fresh = 0, res = 0;
        const q = [];

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === 1) {
                    fresh++;
                }
                if(grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }

        const directions = [[1,0], [0,1], [-1, 0], [0, -1]];
        while(q.length > 0 && fresh > 0) {
            const len = q.length;
            for(let i = 0; i < len; i++) {
                const [r, c] = q.shift() as [number, number];
                for(const [dr, dc] of directions) {
                    const newR = r + dr;
                    const newC = c + dc;
                    if(newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === 1) {
                        grid[newR][newC] = 2;
                        q.push([newR, newC]);
                        fresh--;
                    }
                }
            }
            res++;
        }

        return fresh === 0 ? res : -1;
    }
}
