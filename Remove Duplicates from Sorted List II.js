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
/**
 *思路：使用两个节点，前面的节点负责连接后面移动的节点，后面的节点遇到相同的则一直向后移动；
 */
var deleteDuplicates = function(head) {
    if(head == null || head.next == null)
        return head;
    var resultNode = new ListNode(-1);
    resultNode.next = head;
    var preNode = resultNode;
    var curNode = head;

    while(curNode && curNode.next)
    {
        if(curNode.val === curNode.next.val)
        {
            while(curNode.next && curNode.val === curNode.next.val)
            {
                curNode = curNode.next;
            }
            preNode.next = curNode.next;
            curNode = curNode.next;
        }
        else
        {
            preNode = curNode;
            curNode = curNode.next;
        }
    }
    head = resultNode.next;
    delete(resultNode);
    return resultNode.next;

};
