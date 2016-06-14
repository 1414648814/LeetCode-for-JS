function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null || head.next === null)
        return head;
    var preHead = new ListNode(-1);
    var backHead = new ListNode(-1);
    var preNode = preHead;
    var backNode = backHead;
    var node = head;

    while (node)
    {
        var next = node.next;
        if (node.val  >=  x)
        {
            backNode.next = node;
            backNode = backNode.next;
            backNode.next = null;
        }
        else
        {
            preNode.next = node;
            preNode = preNode.next;
            preNode.next = null;
        }
        node = next;
    }

    preNode.next = backHead.next;
    return preHead.next;
};

var node1 = new ListNode(1);
var node2 = new ListNode(1);
node1.next = node2;

var result = partition(node1,0);
