/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var resultHead = new ListNode(-1);
  var lastNode = resultHead;
  var carry = 0
  while(l1 !== null || l2 !== null){
    var currentValue = ((l1 && l1.val || 0) + (l2 && l2.val || 0) + carry)
    var currentNode = new ListNode(currentValue % 10);
    lastNode.next = currentNode;
    lastNode = lastNode.next;
    //carry = (currentValue)/10;
    carry = (currentValue > 9)? 1 : 0;
    l1 = l1 && l1.next || null;
    l2 = l2 && l2.next || null;
  }
  if(carry) lastNode.next = new ListNode(carry);
  return resultHead.next;
};