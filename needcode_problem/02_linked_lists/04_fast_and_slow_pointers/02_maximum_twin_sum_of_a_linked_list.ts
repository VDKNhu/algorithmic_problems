/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head: ListNode | null) {
        let slow = head, fast = head;
        while(slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null, cur = slow;
        while(cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        let res = 0;
        let first = head, second = prev;
        while(first && second) {
            res = Math.max(res, first.val + second.val);
            first = first.next;
            second = second.next;
        }
        return res;
    }
}
