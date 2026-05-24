class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number) {
        let total = arr.reduce((acc, cur, index) => index < k ? acc + cur : acc, 0);
        let res = total >= threshold * k ? 1 : 0;
        for(let i = 1; i <= arr.length - k; i++) {
            total = total - arr[i - 1] + arr[i + k - 1];
            res += total >= threshold * k ? 1 : 0;
        }
        return res;
    }

    numOfSubarraysV2(arr: number[], k: number, threshold: number) {
        const len = arr.length;
        const totals = new Array(len + 1).fill(0);
        for(let i = 0; i < len; i++) {
            totals[i + 1] += totals[i] + arr[i];
        }

        let res = 0;
        let left = 0;
        for(let right = k - 1; right < len; right++) {
            const total = totals[right + 1] - totals[left];
            if(total >= threshold * k) {
                res++;
            }
            left++;
        }
        return res;
    }
}
