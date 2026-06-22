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
    preorderTraversal(root: TreeNode | null) {
        if(!root) {
            return [];
        }

        const res: number[] = [];
        const dfs = (node: TreeNode) => {
            if(node.left) {
                dfs(node.left);
            }
            if(node.right) {
                dfs(node.right);
            }
            res.push(node.val);
        }

        dfs(root);
        return res;
    }
}
