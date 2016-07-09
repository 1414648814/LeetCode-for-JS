/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var queue = [];
    queue.push(root);

    var result = [];
    while (queue.length != 0) {
        var l = queue.length;
        var level = [];
        for (var i = 0; i < l; i++) {
            var node = queue.shift();
            if (node != null) {
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if (level.length != 0) {
            result.push(level);
        }
    }
    return result.reverse();
};