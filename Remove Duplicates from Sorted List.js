/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    //1.边界判断
    if(head == null || head.next == null)
        return head;

    //2.循环判断，不相同才允许到下一个
    var node = head;
    while(node && node.next)
    {
        if(node.val === node.next.val)
            node.next = node.next.next;
        else
            node = node.next;
    }
    return head;
};