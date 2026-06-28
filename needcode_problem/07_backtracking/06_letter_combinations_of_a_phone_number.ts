class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string) {
        const res: string[] = [];
        
        if(digits.length === 0) {
            return res;
        }

        const digitToChar: Record<string, string> = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "qprs",
            8: "tuv",
            9: "wxyz"
        }
        const backtrack = (i: number, curStr: string) => {
            if(curStr.length === digits.length) {
                res.push(curStr);
                return;
            }

            for(const c of digitToChar[digits[i]]) {
                backtrack(i + 1, curStr + c);
            }
        }

        backtrack(0, "");
        return res;
    }
}
