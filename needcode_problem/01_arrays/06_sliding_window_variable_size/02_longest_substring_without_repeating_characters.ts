class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string) {
        let res = 0, left = 0;
        const map = new Map();
        
        for(let right = 0; right < s.length; right++) {
            if(map.has(s[right])) {
                left = Math.max(left, map.get(s[right]) + 1);
            }
            map.set(s[right], right);
            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
