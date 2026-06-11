class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnectionV1(edges: [number, number][]) {
        const len = edges.length;
        const adj: number[][] = Array.from({ length: len + 1 }, () => []);

        const dfs = (node: number, parent: number, visited: boolean[]) => {
            if(visited[node]) {
                return true;
            }
            visited[node] = true;
            for(const nei of adj[node]) {
                if(nei === parent) {
                    continue;
                }
                if(dfs(nei, node, visited)) {
                    return true;
                }
            }
            return false;
        }

        for(const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
            const visited = new Array(len + 1).fill(false);
            if(dfs(u, -1, visited)) {
                return [u, v];
            }
        }
        return [];
    }

    // Instead of checking for a cycle after every edge, 
    // we build the whole graph once and find the cycle nodes in a single dfs.
    findRedundantConnectionV2(edges: [number, number][]) {
        const len = edges.length;
        const adj: number[][] = Array.from({ length: len + 1 }, () => []);
        const visited = new Array(len + 1).fill(false);
        const cycle = new Set();
        let cycleStart = -1;

        for(const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const dfs = (node: number, parent: number) => {
            if(visited[node]) {
                cycleStart = node;
                return true;
            }

            visited[node] = true;
            for(const nei of adj[node]) {
                if(nei === parent) {
                    continue;
                }
                if(dfs(nei, node)) {
                    if(cycleStart !== -1) {
                        cycle.add(node);
                    }
                    if(node === cycleStart) {
                        cycleStart = -1;
                    }
                    return true;
                }
            }
            return false;
        }

        dfs(1, -1);

        for(let i = len - 1; i >= 0; i--) {
            const [u, v] = edges[i];
            if(cycle.has(u) && cycle.has(v)) {
                return [u, v];
            }
        }
        return [];
    }

    /**
        Use Disjoint Set Union (Union-Find) to track connected components while adding edges one by one.
        - Initially, every node is its own component.
        - When we add an edge (u, v):
            - If u and v are already in the same component, adding this edge creates a cycle.
            - That edge is exactly the redundant connection.
        - If they are in different components, we safely merge them.
    */
    findRedundantConnectionV3(edges: [number, number][]) {
        const len = edges.length;
        const parent = new Array(len + 1).fill(0).map((_, i) => i);
        const rank = new Array(len + 1).fill(1);

        const find = (n: number) => {
            let p = parent[n];
            while(p !== parent[p]) {
                parent[p] = parent[parent[p]];
                p = parent[p];
            }
            return p;
        }

        const union = (n1: number, n2: number) => {
            const p1 = find(n1);
            const p2 = find(n2);

            if(p1 === p2) {
                return false;
            }

            if(rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return true;
        }

        for(const [n1, n2] of edges) {
            if(!union(n1, n2)) {
                return [n1, n2];
            }
        }
        return [];
    }
}
