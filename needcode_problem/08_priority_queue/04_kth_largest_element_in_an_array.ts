class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number) {
        const q = new MaxPriorityQueue();
        for(const num of nums) {
            q.enqueue(num);
        }
        while(k > 1) {
            q.dequeue();
            k--;
        }
        return q.dequeue();
    }
}
