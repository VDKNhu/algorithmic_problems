/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

function guess(num: number): 0 | -1 | 1 {
    return 0;
}

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let startIndex = 0, endIndex = n;
        while(true) {
            const pivot = Math.floor((startIndex + endIndex) / 2);
            const res = guess(pivot);
            if(res === 0) {
                return pivot;
            } else if(res === -1) {
                endIndex = pivot - 1;
            } else {
                startIndex = pivot + 1;
            }
        }
    }
}
