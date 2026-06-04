class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head: ListNode | null) {
        let slow = head, fast = head;
        while(slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
