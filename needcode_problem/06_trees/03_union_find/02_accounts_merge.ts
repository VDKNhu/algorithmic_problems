class UnionFind {
    parent: number[];
    rank: number[];
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(x: number) {
        if(x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x1: number, x2: number) {
        const p1 = this.find(x1);
        const p2 = this.find(x2);
        if(p1 === p2) {
            return false;
        }

        if(this.rank[p1] > this.rank[p2]) {
            this.parent[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parent[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts: string[][]) {
        const len = accounts.length;
        const uf = new UnionFind(len);
        const emailToAcc = new Map();

        for(let i = 0; i < len; i++) {
            for(let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];
                if(emailToAcc.has(email)) {
                    uf.union(i, emailToAcc.get(email));
                } else {
                    emailToAcc.set(email, i);
                }
            }
        }

        const emailGroup = new Map();
        for(const [email, accId] of emailToAcc.entries()) {
            const parent = uf.find(accId);
            if(!emailGroup.has(parent)) {
                emailGroup.set(parent, []);
            }
            emailGroup.get(parent).push(email);
        }

        const res = [];
        for(const [accId, emails] of emailGroup.entries()) {
            emails.sort();
            const merged = [accounts[accId][0], ...emails];
            res.push(merged);
        }
        return res;
    }
}
