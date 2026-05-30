class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]) {
        let left = 0, right = heights.length - 1, res = 0;

        while(left < right) {
            const area = Math.min(heights[left], heights[right]) * (right - left);
            res = Math.max(res, area);
            if(heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return res;
    }
}
