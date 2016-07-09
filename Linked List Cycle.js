/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null)
        return false;
    var node = head.next;
    var nextnode = head.next;

    while (nextnode && nextnode.next) {
        node = node.next;
        nextnode = nextnode.next.next;

        if (node == nextnode) {
            return true;
        }
    }
    return false;
};