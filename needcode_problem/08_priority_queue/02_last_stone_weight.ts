class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]) {
        const q = new MaxPriorityQueue();
        for(const stone of stones) {
            q.enqueue(stone);
        }

        while(q.size() > 1) {
            const stone1 = q.dequeue();
            const stone2 = q.dequeue();
            if(stone1 !== stone2) {
                q.enqueue(Math.abs(stone1 - stone2));
            }
        }

        return q.size() === 1 ? q.dequeue() : 0;
    }
}
