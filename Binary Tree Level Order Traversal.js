/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 1和2使用的方法都是DFS，递归的思路，但是3使用的则是BFS，队列迭代的思路
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null)
        return [];
    var result = [];
    levelOrder(root, 0);
    return result;

    function levelOrder (node, level) {
        if (node == null) return;
        if (result.length == level)
            result.push([]);
        result[level++].push(node.val);
        levelOrder(node.left, level);
        levelOrder(node.right, level);
    }
};

var levelOrder2 = function(root) {
    if (root == null)
        return [];
    var result = [];
    levelOrder(root, 0);
    return result;

    function levelOrder (node, level) {
        if (node == null) return;
        if (level >= result.length)
            result.push([]);
        result[level].push(node.val);
        levelOrder(node.left, level+1);
        levelOrder(node.right, level+1);
    }
};

var levelOrder3 = function(root) {
    var queue = [];
    queue.push(root);

    var result = [];
    while (queue.length != 0) {
        var l = queue.length;  //因为后面shift会改变队列的长度，需要提前保存下来
        var level = [];
        for (var i = 0; i < l; i++) {
            var node = queue.shift(); //返回第一个元素，并且删除
            if (node != null) {
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if (level.length != 0)
            result.push(level);
    }
    return result;
};