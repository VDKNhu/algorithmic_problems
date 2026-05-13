class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image: number[][], sr: number, sc: number, color: number) {
        const originalColor = image[sr][sc];
        if(originalColor === color) {
            return image;
        }

        const rows = image.length, cols = image[0].length;
        const dfs = (r: number, c: number) => {
            if(r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== originalColor) {
                return;
            }

            image[r][c] = color;
            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
        }
        dfs(sr, sc);
        return image;
    }
}
