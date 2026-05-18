class GraphNode {
    val: number;
    neighbors: GraphNode[];
    constructor(val: number, neighbors = []) {
      this.val = val;
      this.neighbors = neighbors;
    }
}

class Solution {
    /**
     * @param {GraphNode} node
     * @return {GraphNode}
     */
    cloneGraph(node: GraphNode | null): GraphNode | null {
        const res = new Map();
        return this.dfs(node, res);
    }

    dfs(node: GraphNode | null, res: Map<GraphNode, GraphNode>): GraphNode | null {
        if(node === null) {
            return null;
        }

        if(res.has(node)) {
            return res.get(node) as GraphNode;
        }

        const tmp = new GraphNode(node.val);
        res.set(node, tmp);

        for(const neighbor of node.neighbors) {
            tmp.neighbors.push(this.dfs(neighbor, res) as GraphNode);
        }

        return tmp;
    }
}
