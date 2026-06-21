class MyCalendarBSAndSortedSet {
    events: number[][];
    constructor() {
        this.events = [];
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    bookByBinarySearchAndSortedSet(startTime: number, endTIme: number) {
        if(startTime >= endTIme) {
            return false;
        }

        const binarySearch = (target: number) => {
            let start = 0, end = this.events.length;
            while(start < end) {
                const mid = Math.floor((start + end) / 2);
                if(this.events[mid][0] < target) {
                    start = mid + 1;
                } else {
                    end = mid;
                }
            }
            return start;
        }

        const index = binarySearch(startTime);
        if(index > 0 && this.events[index - 1][1] > startTime) {
            return false;
        }
        if(index < this.events.length && this.events[index][0] < endTIme) {
            return false;
        }
        this.events.splice(index, 0, [startTime, endTIme]);
        return true;
    }
}
