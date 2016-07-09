/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    //1.边界判断
    if (root == null)
        return false;

    var cursum = 0;
    var result = helper(root, cursum);
    return result;

    function helper (node, cursum) {
        if (node == null)
            return false;
        if (node.left == null && node.right == null)
            return cursum + node.val == sum;
        return helper(node.left, cursum + node.val) || helper(node.right, cursum + node.val);
    }
};