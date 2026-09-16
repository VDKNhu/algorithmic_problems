class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function averageOfSubtree(root: TreeNode | null): number {
    let res = 0;

    function calAverageOfSubtree(node: TreeNode | null): [number, number] {
        if(!node) {
            return [0, 0];
        }

        const [leftSum, leftCount] = calAverageOfSubtree(node.left);
        const [rightSum, rightCount] = calAverageOfSubtree(node.right);

        const nextSum = leftSum + rightSum + node.val;
        const nextCount = leftCount + rightCount + 1;
        if(Math.floor(nextSum / nextCount) === node.val) {
            res++;
        }

        return [nextSum, nextCount];
    }

    calAverageOfSubtree(root);
    return res;
};