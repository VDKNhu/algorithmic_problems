function calDigitSum(num: number): number {
    let res = 0;
    while(num !== 0) {
        res += num % 10;
        num = Math.floor(num / 10);
    }
    return res;
}

function minSwaps(nums: number[]): number {
    const len = nums.length;

    const digitSumValuePairs: number[][] = new Array(len);
    for(let i = 0; i < len; i++) {
        digitSumValuePairs[i] = [calDigitSum(nums[i]), nums[i]];
    }
    digitSumValuePairs.sort((d1: number[], d2: number[]) => {
        if(d1[0] !== d2[0]) {
            return d1[0] - d2[0];
        }
        return d1[1] - d2[1];
    });

    const valueToTargetPosition = new Map<number, number>();
    for(let i = 0; i < len; i++) {
        valueToTargetPosition.set(digitSumValuePairs[i][1], i);
    }

    let cycles = 0;
    const visited = new Array(len).fill(false);
    for(let i = 0; i < len; i++) {
        if(!visited[i]) {
            cycles++;
            let currentPosition = i;

            while(!visited[currentPosition]) {
                visited[currentPosition] = true;
                currentPosition = valueToTargetPosition.get(nums[currentPosition]);
            }
        }
    }

    // k-1 swaps for a cycle of length k
    // The total minimum swaps equals n - (number of cycles). Each cycle of length k contributes k elements but needs k-1 swaps. If we have c cycles covering all n elements, we need (k₁-1) + (k₂-1) + ... + (kc-1) = n - c swaps total.
    return len - cycles;
};