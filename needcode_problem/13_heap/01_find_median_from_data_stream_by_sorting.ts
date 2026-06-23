class MedianFinder {
    data: number[];
    constructor() {
        this.data = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number) {
        this.data.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.data.sort((a: number, b: number) => a - b);
        const len = this.data.length;
        if(len & 1) {
            return this.data[Math.floor(len / 2)];
        } 
        return (this.data[len / 2] + this.data[len / 2 - 1]) / 2;
    }
}
