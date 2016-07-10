function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var TreeDepth = function (root) {
    if (root == null)
        return 0;
    var leftLength = TreeDepth(root.left);
    var rightLength = TreeDepth(root.right);

    return leftLength > rightLength ? leftLength + 1 : rightLength + 1;
};

var isBalanced = function(root) {
    if (root == null)
        return true;
    var leftDepth = TreeDepth(root.left);
    var rightDepth = TreeDepth(root.right);

    if (Math.abs(leftDepth - rightDepth) > 1)
        return false;

    return isBalanced(root.left) && isBalanced(root.right);
};

/**
 * 一边递归一边判断是否是平衡二叉树
 */
function checkBalance (node, height) {
    if (node == null) {
        height = 0;
        return true;
    }
    var leftHeight = 0;
    var rightHeight = 0;
    if (!checkBalance(node.left, leftHeight)) return false;
    if (!checkBalance(node.right, rightHeight)) return false;
    if (Math.abs(leftHeight - rightHeight) > 1 ) return false;
    height = Math.max(leftHeight, rightHeight) + 1;
    return true;
};

var isBalanced2 = function (root) {
    var d = 0;
    return checkBalance(root, d);
};

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);

node1.right = node2;
node2.right = node3;

console.log(isBalanced2(node1));
