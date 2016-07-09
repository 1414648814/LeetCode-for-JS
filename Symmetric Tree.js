function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * 方法1:利用中序的结果进行判断（这种方法并不可行，中序结果对称的树并不一定就对称）
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root == null)
        return true;
    var result = [];
    Inorder(root);
    for (var i = 0,j = result.length-1; i<j; i++,j--) {
        if (result[i] != result[j])
            return false;
    }
    return true;

    function Inorder(node) {
        if (node == null) {
            return;
        }
        if (node.left)
            Inorder(node.left);
        result.push(node.val);
        if (node.right)
            Inorder(node.right);
    }
};


/**
 * 方法2:利用递归的同时进行判断
 * @param root
 */
var isSymmetric2 = function(root) {
    if (root == null)
        return true;
    return helper(root.left, root.right);

    function helper (left, right) {
        if (left == null && right == null)
            return true;
        else if (left == null || right == null)
            return false;
        if (left.val != right.val)
            return false;
        var l = helper(left.left,right.right);
        var r = helper(left.right, right.left);
        return l && r;
    }
};

/**
 * 方法3:根据BFS思想，利用两个栈遍历进行判断
 * @param root
 */
var isSymmetric3 = function(root) {
    if (root == null)
        return true;
    var leftStack = [];
    var rightStack = [];

    leftStack.push(root.left);
    rightStack.push(root.right);

    while (leftStack.length > 0 && rightStack.length > 0) {
        var leftNode = leftStack.pop();
        var rightNode = rightStack.pop();

        if (leftNode == null && rightNode == null)
            continue;
        else if (leftNode == null || rightNode == null)
            return false;
        if (leftNode.val == rightNode.val) {
            leftStack.push(leftNode.left);
            leftStack.push(leftNode.right);
            rightStack.push(rightNode.right);
            rightStack.push(rightNode.left);
        }
        else {
            return false;
        }
    }
    return true;
};


var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
n1.left = n2;
n1.right = n3;
var n4 = new TreeNode(3);
var n5 = new TreeNode(2);
n2.left = n4;
n3.left = n5;

console.log(isSymmetric3(n1));