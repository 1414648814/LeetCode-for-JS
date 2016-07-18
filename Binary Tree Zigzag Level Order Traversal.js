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
// 这个是根据level去判断是否到达新的层
// 用的思想是dfs中的递归
var zigzagLevelOrder = function(root) {
    var arr = [];
    travel(root, arr, 0);
    return arr;

    function travel (curr, arr, level) {
        if (curr == null) return;

        if (arr.length <= level) {
            var newLevelArr = [];
            arr.push(newLevelArr);
        }

        var collection = arr[level];
        if (level % 2 == 0) collection.push(curr.val);
        else collection.unshift(curr.val);

        travel(curr.left, arr, level + 1);
        travel(curr.right, arr, level + 1);
    }
};

// 这个是根据队列的内容添加内容
// 利用得是bfs中的队列
var zigzagLevelOrder = function(root) {
    var result = [];
    if (root == null) {
        return result;
    }

    var queue = [];
    queue.push(root);

    var leftToRight = true;
    while (queue.length !== 0) {
        var size = queue.length;
        var row = new Array(size);
        for (var i = 0; i < size; i++) {
            var node = queue.shift();
            var index = leftToRight ? i : size - i - 1;

            row[index] = node.val;
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        leftToRight = !leftToRight;
        result.push(row);
    }
    return result;
};