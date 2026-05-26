class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number) {
        let res = 0, left = 0, maxF = 0;
        const map = new Map<string, number>();

        for(let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            maxF = Math.max(maxF, (map.get(s[right]) || 0));

            while(right - left + 1 - maxF > k) {
                map.set(s[left], (map.get(s[left]) || 0) - 1);
                left++;
            }
            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
