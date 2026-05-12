class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        if(s.length !== t.length) {
            return false;
        }

        const aCharCode = 'a'.charCodeAt(0);
        const count = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - aCharCode]++;
            count[t.charCodeAt(i) - aCharCode]--;
        }
        return count.every(count => count === 0)
    }
}
