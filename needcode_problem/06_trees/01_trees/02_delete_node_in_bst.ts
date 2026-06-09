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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number) {
        if(!root) {
            return null;
        }

        if(root.val === key) {
            if(!root.left) {
                return root.right;
            }
            if(!root.right) {
                return root.left;
            }

            let cur = root.right;
            while(cur.left) {
                cur = cur.left;
            }
            root.val = cur.val;
            root.right = this.deleteNode(root.right, cur.val);
        } else if(root.val > key) {
            root.left = this.deleteNode(root.left, key);
        } else {
            root.right = this.deleteNode(root.right, key);
        }
        return root;
    }
}
