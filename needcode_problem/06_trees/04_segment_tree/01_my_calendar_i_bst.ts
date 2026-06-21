class TreeNodeBST {
    start: number;
    end: number;
    left: TreeNodeBST | null;
    right: TreeNodeBST | null;
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
        this.left = null;
        this.right = null;
    }
}

class MyCalendar {
    root: TreeNodeBST | null;
    constructor() {
        this.root = null;
    }

    insert(node: TreeNodeBST, start: number, end: number): boolean {
        if(end <= node.start) {
            if(!node.left) {
                node.left = new TreeNodeBST(start, end);
                return true;
            }
            return this.insert(node.left, start, end);
        } else if(start >= node.end) {
            if(!node.right) {
                node.right = new TreeNodeBST(start, end);
                return true;
            }
            return this.insert(node.right, start, end);
        }
        return false;
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    bookByBinarySearchTree(startTime: number, endTIme: number) {
        if(!this.root) {
            this.root = new TreeNodeBST(startTime, endTIme);
            return true;
        }
        return this.insert(this.root, startTime, endTIme)
    }
}
