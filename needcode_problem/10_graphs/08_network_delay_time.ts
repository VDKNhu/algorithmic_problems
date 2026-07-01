class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTimeByDFS(times: number[][], n: number, k: number) {
        const adj: Record<number, number[][]> = {};
        for(const [u, v, w] of times) {
            if(!adj[u]) {
                adj[u] = [];
            }
            adj[u].push([v, w]);
        }

        const dist = new Array(n + 1).fill(Infinity);
        const dfs = (node: number, time: number) => {
            if(time >= dist[node]) {
                return;
            }

            dist[node] = time;
            if(!adj[node]) {
                return;
            }

            for(const [v, w] of adj[node]) {
                dfs(v, time + w);
            }
        }

        dfs(k, 0);
        const res = Math.max(...dist.slice(1));
        return res === Infinity ? -1 : res;
    }

    // Dijkstra's Algorithm finds the shortest time from the source node k to all other nodes 
    // when all edge weights are non-negative.
    // The key idea:
    // - Always expand the node that currently has the smallest known time
    // - Once a node is picked from the min-heap, its shortest time is final
    // - Use a min-heap (priority queue) to always process the closest node next
    networkDelayTimeByDijkstra(times: number[][], n: number, k: number) {
        const edges = new Map();
        for(let i = 1; i <= n; i++) {
            edges.set(i, []);
        }

        for(const [u, v, w] of times) {
            edges.get(u).push([v, w]);
        }

        const minHeap = new MinPriorityQueue(entry => entry[0]);
        minHeap.enqueue([0, k]);
        const visited = new Set();
        let res = 0;

        while(!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.dequeue();
            if(visited.has(n1)) {
                continue;
            }
            visited.add(n1);
            res = w1;

            for(const [n2, w2] of edges.get(n1)) {
                if(!visited.has(n2)) {
                    minHeap.enqueue([w1 + w2, n2]);
                }
            }
        }

        return visited.size === n ? res : -1;
    }
}
