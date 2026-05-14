class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid: number[][]) {
        const n = grid.length;
        if(grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
            return -1;
        }

        const direct = [0, 1, 0, -1, 0, 1, 1, -1, -1, 1];
        const q = [[0, 0]];
        grid[0][0] = 1;
        while(q.length > 0) {
            const [r, c] = q.shift() as [number, number];
            let dist = grid[r][c];
            if(r === n - 1 && c === n - 1) {
                return dist;
            }

            for(let i = 0; i < 9; i++) {
                const newR = r + direct[i];
                const newC = c + direct[i + 1];
                if(newR >= 0 && newC >= 0 && newR < n && newC < n && grid[newR][newC] === 0) {
                    grid[newR][newC] = dist + 1;
                    q.push([newR, newC]);
                }
            }
        }

        return -1;
    }
}
