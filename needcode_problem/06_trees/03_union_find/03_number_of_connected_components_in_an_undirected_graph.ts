class DSU {
    parent: number[];
    rank: number[];
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(node: number) {
        let cur = node;
        while(cur !== this.parent[cur]) {
            this.parent[cur] = this.parent[this.parent[cur]];
            cur = this.parent[cur];
        }
        return cur;
    }

    union(u: number, v: number) {
        let pu = this.find(u);
        let pv = this.find(v);
        if(pu === pv) {
            return false;
        }

        if(this.rank[pv] > this.rank[pu]) {
            [pu, pv] = [pv, pu];
        } 
        this.parent[pv] = pu;
        this.rank[pu] += this.rank[pv];
        return true;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponentsByDFS(n: number, edges: number[][]) {
        const adj: number[][] = Array.from({ length: n }, () => []);
        const visited: boolean[] = new Array(n).fill(false);

        for(const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const dfs = (node: number) => {
            for(const nei of adj[node]) {
                if(!visited[nei]) {
                    visited[nei] = true;
                    dfs(nei);
                }
            }
        }

        let res = 0;
        for(let node = 0; node < n; node++) {
            if(!visited[node]) {
                visited[node] = true;
                dfs(node);
                res++;
            }
        }

        return res;
    }

    countComponentsByDSU(n: number, edges: number[][]) {
        const dsu = new DSU(n);
        let res = n;
        for(const [u, v] of edges) {
            if(dsu.union(u, v)) {
                res--;
            }
        }
        return res;
    }
}
