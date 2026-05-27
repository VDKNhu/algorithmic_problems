class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number) {
        let left = 0, right = numbers.length - 1;
        while(left <= right) {
            const total = numbers[left] + numbers[right];
            if(total < target) {
                left++;
            } else if(total > target) {
                right--;
            } else {
                return [left + 1, right + 1];
            }
        }
        return [-1, -1];
    }
}
