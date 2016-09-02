/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
创建一个结点指向头，在定义两个结点指向新的结点
专门用来移动用的
fast 先移动 n ，然后再 slow 和 fast一起移动；
最后slow 指向的删除的结点
*/
var removeNthFromEnd = function(head, n) {
	var length = 0;
    var start = new ListNode(0);
    var slow = start;
    fast = start;
    start.next = head;
    for (var i = 0;i < n;i++) fast = fast.next;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return start.next;
};


var Prem (node,offset,target){
    if (node || node.next) {
        return 0;
    }
    var count = Prem(node.next,count,target);
    count ++ ;
    if (count == target) {
        node.next = node.next.next;
    }
    return count;
};

var removeNthFromEnd2 = function(head, n) {
    var curNode = head;
    var count = Prem(cur,0,n)；
    if (count+1 = n) head = head.next;
    return head;
};