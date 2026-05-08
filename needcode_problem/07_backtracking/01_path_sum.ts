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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSumDFS(root: TreeNode | null, targetSum: number) {
        function dfs(node: TreeNode | null, sum: number): boolean {
            if(!node) {
                return false;
            }

            sum += node.val;
            if(!node.left && !node.right) {
                return sum === targetSum;
            }
            return dfs(node.left, sum) || dfs(node.right, sum);
        }

        return dfs(root, 0);
    }

    hasPathSumBFS(root: TreeNode | null, targetSum: number) {
        if(!root) {
            return false;
        }
        const q = new Queue([[root, targetSum - root.val]]);
        while(!q.isEmpty()) {
            const [node, sum] = q.pop();
            if(!node.left && !node.right && sum === 0) {
                return true;
            }
            if(node.left) {
                q.push([node.left, sum - node.left.val]);
            }
            if(node.right) {
                q.push([node.right, sum - node.right.val]);
            }
        }
        return false;
    }
}
