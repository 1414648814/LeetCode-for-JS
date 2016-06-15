function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    //1.边界判断
    if (m === n)
        return head;

    //2.完成头结点
    var preHead = new ListNode(0);
    preHead.next = head;

    //3.计算开头的最后位置
    var firstTail = preHead;
    for(var i = 1;i < m;i++)
        firstTail = firstTail.next;

    //4.记录翻转链表开头的位置
    var secondTail = firstTail.next;

    //5.翻转 m 到 n的链表
    var tempHead = null,
        tempNext = null,
        tempNode = firstTail.next;
    for(var i = 1;i <= n-m+1;i++)
    {
        tempHead = tempNode;
        tempNode = tempNode.next;

        tempHead.next = tempNext;
        tempNext = tempHead;
    }

    //6.链表连接
    firstTail.next = tempHead;
    secondTail.next = tempNode;

    return preHead.next;

};

var reverseLinkedList = function (head, m, n) {
    var pNode = head;
    var pPrev = null;

    while(pNode)
    {
        var pNext = pNode.next;
        pNode.next = pPrev;
        pPrev = pNode;
        pNode = pNext;
    }
    return pPrev;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var result = reverseBetween(node1,2,4);
console.log(result);