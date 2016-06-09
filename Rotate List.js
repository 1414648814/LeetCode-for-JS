function ListNode(val) {
     this.val = val;
     this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || k <= 0)
        return head;

    var temp = head;
    var count = 0;
    while(temp)
    {
        count++;
        temp = temp.next;
    }

    if(k > count)
        k = k % count;
    if(k === count || k === 0)
        return head;

    var firstNode = head;
    var secondNode = head;
    while(k > 0)
    {
        firstNode = firstNode.next;
        k--;
    }

    while(firstNode.next)
    {
        firstNode = firstNode.next;
        secondNode = secondNode.next;
    }

    var resultNode = secondNode.next;
    firstNode.next = head;
    secondNode.next = null;
    return resultNode;

};

