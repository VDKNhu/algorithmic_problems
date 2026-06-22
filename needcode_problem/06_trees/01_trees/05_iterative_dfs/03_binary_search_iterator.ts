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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    arr: number[];
    index: number;
    constructor(root: TreeNode | null) {
        this.arr = [];
        this.index = 0;

        const dfs = (node: TreeNode | null) => {
            if(!node) {
                return;
            }
            dfs(node.left);
            this.arr.push(node.val);
            dfs(node.right);
        }
        dfs(root);
    }

    /**
     * @return {number}
     */
    next() {
        return this.arr[this.index++];
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.index < this.arr.length;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
