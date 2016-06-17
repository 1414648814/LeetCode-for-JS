
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    var dp = [];
    //1.边界判断
    if (n === 0)
        return [];
    else
    {
        //2.计算n下BST的数目，和一的题目要求是一样的
        var dp = new Array(n + 1);
        dp[0] = dp[1] = 1;
        for (var i = 2;i <= n;i++)
            dp[i] = 0;
        for (var i = 2;i <= n; i++)
            for (var j = 1;j <= i; j++)
                dp[i] += dp[j-1] * dp[i-j];

        //3.计算树
        var trees = helper(1, n);

        //4.计算结果
        var res = [];
        for (var i = 0; i < trees.length; i++)
            res.push(trees[i]);
        return res;
    }

    return result;

    function helper(start, end) {
        var roots = null;
        var curlen = 0;   //记录执行的BST的index

        //1.边界判断
        if (start > end)
        {
            roots = new Array(1);
            roots[0] = null;
            return roots;
        }

        //2.计算跟节点
        roots = new Array(dp[end - start + 1]);

        //3.计算树
        for (var i = start; i <= end; i++)
        {
            //递归计算左子树
            var lefts = helper(start, i-1);
            //递归计算右子树
            var rights = helper(i+1,end);

            //对节点进行赋值
            for (var p = 0; p < lefts.length; p++)
            {
                for (var q = 0; q < rights.length; q++)
                {
                    var root = new TreeNode(i);
                    root.left = lefts[p];
                    root.right = rights[q];
                    roots[curlen++] = root;
                }
            }
        }

        return roots;
    }
};


var n = 3;
var result = generateTrees(n);
console.log(result);