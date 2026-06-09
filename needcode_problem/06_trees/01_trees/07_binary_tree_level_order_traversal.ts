/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrderBFS(root: TreeNode | null) {
        const res: number[][] = [];
        if(!root) {
            return res;
        }

        const q = new Queue();
        q.push(root);

        while(!q.isEmpty()) {
            const subVals = [];
            for(let i = q.size(); i > 0; i--) {
                const node = q.pop();
                if(node) {
                    subVals.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if(subVals.length > 0) {
                res.push(subVals);
            }
        }
        
        return res;
    }

    levelOrderDFS(root: TreeNode | null) {
        const res: number[][] = [];

        function dfs(node: TreeNode | null, depth: number) {
            if(!node) {
                return;
            }

            if(depth === res.length) {
                res.push([]);
            }

            res[depth].push(node.val);
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
        }

        dfs(root, 0);
        return res;
    }
}
