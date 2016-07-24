/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null)
        return 0;
    var left = minDepth(root.left);
    var right = minDepth(root.right);

    return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1;
};

var minDepth2 = function(root) {
    if (root === null)
        return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
