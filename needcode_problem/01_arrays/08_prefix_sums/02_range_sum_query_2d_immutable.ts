class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    prefix;
    constructor(matrix: number[][]) {
        const rows = matrix.length, cols = matrix[0].length;
        this.prefix = Array.from({ length: rows }, () => new Array(cols + 1).fill(0));
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                this.prefix[r][c + 1] = this.prefix[r][c] + matrix[r][c];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number) {
        let res = 0;
        for(let r = row1; r <= row2; r++) {
            res += this.prefix[r][col2 + 1] - this.prefix[r][col1];
        }
        return res;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
