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
 /*
 思路：因为两个链表都是有序的，
 	所以只要比较每个链表的第一个值，
 	然后进行移动就可以了，
 	最后要判断短的链表已经排序完了
	
 */
var mergeTwoLists = function(l1, l2) {
  
    var temp_l1 = l1;
    var temp_l2 = l2;
    var result = new ListNode(-1);
    var node = result;
    while (temp_l1 && temp_l2) {
    	if (temp_l1.val > temp_l2.val) {
    		result.next = temp_l2;
    		temp_l2 = temp_l2.next;
    	}
    	else {
    		result.next = temp_l1;
    		temp_l1 = temp_l1.next;
    	}
    	result = result.next;
    }
    if (!temp_l1) {
    	result.next = temp_l2;
    }
    else if (!temp_l2) {
    	result.next = temp_l1;
    }
    return node.next;
};

/*
	思路：和上面类似，只不过是用递归的方法
*/
var mergeTwoLists2 = function(l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;
	var result = new ListNode(-1);
	if (l1.val > l2.val) {
		result = l2;
		result.next = mergeTwoLists(l1,l2.next);
	}  
	else {
		result = l1;
		result.next = mergeTwoLists(l1.next,l2);
	}
	return result;
};