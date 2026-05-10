class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number) {
        const q = new MinPriorityQueue((point: number[]) => point[0]);
        for(const [x, y] of points) {
            const distance = x ** 2 + y ** 2;
            q.enqueue([distance, x, y]);
        }
        const res = [];
        for(let i = 0; i < k; i++) {
            const [_, x, y] = q.dequeue();
            res.push([x, y]);
        }
        return res;
    } 
}
