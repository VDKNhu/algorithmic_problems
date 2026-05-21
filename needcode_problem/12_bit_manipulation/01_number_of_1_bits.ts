class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number) {
        let res = 0;
        while(n > 0) {
            if(n % 2 === 0) {
                n = n / 2;
            } else {
                res++;
                n = (n - 1) / 2;
            }
        }

        return res;
    }
}
