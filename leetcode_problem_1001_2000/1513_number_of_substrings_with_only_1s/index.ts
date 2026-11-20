// Math approach
function numSub1(s: string): number {
    const MOD = 1000000007;
    const chars = s.split("");
    let freq = 0, res = 0;
    for(const char of chars) {
        if(char === "0") {
            res += freq * (freq + 1) / 2;
            freq = 0;
            continue;
        } else {
            freq++;
        }
    }

    res += freq * (freq + 1) / 2;
    return res % MOD;
};

function numSub2(s: string): number {
    const MOD = 1000000007;
    let res = 0, freq = 0;
    for(const char of s) {
        if(char === '1') {
            freq++;
            res = (res + freq) % MOD;
        } else {
            freq = 0;
        }
    }

    return res;
};

// Prefix sum approach
function numSub3(s: string): number {
    const MOD = 1000000007;
    const len = s.length;
    const prefixSum = new Array(len + 1).fill(0);

    let freq = 0;
    for(let i = 0; i < len; i++) {
        if(s[i] === '1') {
            freq++;
            prefixSum[1] += 1;
            prefixSum[freq + 1] -= 1;
        } else {
            freq = 0;
        }
    }

    let res = 0;
    for(let i = 1; i <= len; i++) {
        prefixSum[i] += prefixSum[i - 1];
        res = (res + prefixSum[i]) % MOD;
    }

    return res;
};