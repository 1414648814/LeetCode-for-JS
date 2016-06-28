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
//DFS
var maxDepth = function(root) {
    if (root === null)
        return 0;

    var leftV = maxDepth(root.left);
    var rightV = maxDepth(root.right);

    return leftV > rightV ? leftV + 1 : rightV + 1;
};

var maxDepth = function(root) {
    if (root === null)
        return 0;

    return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
};

//BFS
var maxDepth = function(root) {
    if (root === null)
        return 0;
    var queue = [];
    var ndepth = 0;

    queue.push(root);

    while (queue.length !== 0)
    {
        ndepth++;
        var n = queue.length;

        for (var i = 0; i < n; i++)
        {
            var node = queue[0];
            queue.shift();

            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
    }
    return ndepth;
};