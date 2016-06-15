function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    inorder(root);
    return result;

    function inorder(root)
    {
        if (root === null) return;
        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }

};
