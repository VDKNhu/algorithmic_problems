class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number) {
        let start = 1, end = Math.max(...piles), res = end;
        while(start <= end) {
            const pivot = Math.floor((start + end) / 2);
            let totalTimes = piles.reduce((acc, cur) => acc + Math.ceil(cur / pivot), 0);
            if(totalTimes <= h) {
                res = pivot;
                end = pivot - 1;
            } else {
                start = pivot + 1;
            }
        }
        return res;
    }
}
