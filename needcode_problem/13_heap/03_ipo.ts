class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]) {
        const len = profits.length;
        const minCapital = new PriorityQueue((a: [number, number], b: [number, number]) => a[0] - b[0]);
        const maxProfit = new PriorityQueue((a: number, b: number) => b - a);

        for(let i = 0; i < len; i++) {
            minCapital.enqueue([capital[i], profits[i]]);
        }

        for(let i = 0; i < k; i++) {
            while(!minCapital.isEmpty() && minCapital.front()[0] <= w) {
                maxProfit.enqueue(minCapital.dequeue()[1]);
            }
            if(maxProfit.isEmpty()) {
                break;
            }
            w += maxProfit.dequeue();
        }
        return w;
    }
}
