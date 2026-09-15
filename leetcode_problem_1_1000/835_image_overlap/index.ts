function largestOverlap(img1: number[][], img2: number[][]): number {
    const len = img1.length;
    const translationCountMap: Map<number, number> = new Map();
    let res = 0;

    for(let r1 = 0; r1 < len; r1++) {
        for(let c1 = 0; c1 < len; c1++) {
            if(img1[r1][c1] === 1) {
                for(let r2 = 0; r2 < len; r2++) {
                    for(let c2 = 0; c2 < len; c2++) {
                        if(img2[r2][c2] === 1) {
                            const key = 200 * (r2 - r1) + c2 - c1;
                            const value = (translationCountMap.get(key) ?? 0) + 1;
                            translationCountMap.set(key, value);
                            res = Math.max(res, value);
                        }
                    } 
                }
            }
        }
    }

    return res;
};

function largestOverlapV2(img1: number[][], img2: number[][]): number {
    const len = img1.length;
    const index1: number[][] = [], index2: number[][] = [];

    for(let r = 0; r < len; r++) {
        for(let c = 0; c < len; c++) {
            if(img1[r][c] === 1) {
                index1.push([r, c]);
            }
            if(img2[r][c] === 1) {
                index2.push([r, c]);
            }
        }
    }

    let res = 0;
    let cnt: number[][] = Array.from({ length: 2 * len }, () => new Array(2 * len).fill(0));
    for(let i1 of index1) {
        for(let i2 of index2) {
            const dx = i2[0] - i1[0] + len;
            const dy = i2[1] - i1[1] + len;
            res = Math.max(res, ++cnt[dx][dy]);
        }
    }
    return res;
};