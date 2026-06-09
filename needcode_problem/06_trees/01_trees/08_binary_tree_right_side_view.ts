class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
 
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideViewBFS(root: TreeNode | null) {
        const res: number[] = [];
        const q = new Queue();
        q.push(root);

        while(!q.isEmpty()) {
            let rightNode = null;
            const qSize = q.size();
            for(let i = 0; i < qSize; i++) {
                const node = q.pop();
                if(node) {
                    rightNode = node;
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if(rightNode) {
                res.push(rightNode.val);
            }
        }
        
        return res;
    }

    rightSideViewDFS(root: TreeNode | null) {
        const res: number[] = [];

        function dfs(node: TreeNode | null, depth: number) {
            if(!node) {
                return;
            }

            if(depth === res.length) {
                res.push(node.val);
            }

            dfs(node.right, depth + 1);
            dfs(node.left, depth + 1);
        }

        dfs(root, 0);
        return res;
    }
}
