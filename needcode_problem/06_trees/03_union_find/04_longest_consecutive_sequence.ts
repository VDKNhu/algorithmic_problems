class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutiveBySorting(nums: number[]) {
        if(nums.length === 0) {
            return 0;
        }

        nums.sort((a: number, b: number) => a - b);
        let res = 0, cur = nums[0], streak = 0, i = 0;
        while(i < nums.length) {
            if(cur !== nums[i]) {
                cur = nums[i];
                streak = 0;
            }
            while(i < nums.length && nums[i] === cur) {
                i++;
            }
            streak++;
            cur++;
            res = Math.max(res, streak);
        }

        return res;
    }

    longestConsecutiveByHashMap(nums: number[]) {
        const map = new Map();
        let res = 0;

        for(const num of nums) {
            if(!map.has(num)) {
                map.set(num, (map.get(num - 1) || 0) + 1 + (map.get(num + 1) || 0));
                map.set(num - (map.get(num - 1) || 0), map.get(num)); // store left boundary
                map.set(num + (map.get(num + 1) || 0), map.get(num)); // store right boundary
                res = Math.max(res, map.get(num));
            }
        }
        return res;
    }
}
