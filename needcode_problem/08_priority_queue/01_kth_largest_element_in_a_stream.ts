class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    minHeap: MinPriorityQueue<number>;
    k: number;
    constructor(k: number, nums: number[]) {
        this.minHeap = new MinPriorityQueue<number>();
        this.k = k;

        for(const num of nums) {
            this.minHeap.enqueue(num);
        }

        while(this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number) {
        this.minHeap.enqueue(val);
        if(this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        return this.minHeap.front();
    }
}
