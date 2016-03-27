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
var swapPairs = function(head) {
	if (head == null || head.next == null) return head;
	var newList = new ListNode(-1),
		curr_node = newList,
		first_node = null,
		second_node = null;
	newList.next = head;

    while (curr_node.next && curr_node.next.next) {
    	first_node = curr_node.next;
    	second_node = curr_node.next.next;

    	first_node.next = second_node.next;
    	curr_node.next = second_node;
    	second_node.next = first_node;
    	curr_node = curr_node.next.next; 
    }
    return newList.next;
};


/*
	思路：采用递归的方式进行交换
	计算第一个结点的下一个位置
	再将第二个结点指向第一个结点
*/
var swapPairs = function(head) {
	if (head == null || head.next == null) return head;
	var node = head.next;
	head.next = swapPairs(head.next.next);
	node.next = head;
	return node;
}