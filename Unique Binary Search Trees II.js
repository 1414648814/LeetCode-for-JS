
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

var generateTrees2 = function(n) {
    //1.边界判断
    if (n === 0)
        return [];
    else
    {
        //2.计算树
        return helper(1, n);
    }

    function helper(start, end) {
        var roots = [];
        //1.边界判断
        if (start > end)
        {
            roots = new Array(1);
            roots[0] = null;
            return roots;
        }
        else if (start === end)
        {
            roots.push(new TreeNode(start));
            return roots;
        }

        //2.计算树
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
                    roots.push(root);
                }
            }
        }
        return roots;
    }
};


/**
 * 核心思想：动态规划
 */
var generateTrees3 = function(n) {
    if (n == 0)
    {
        return [];
    }
    else
    {
        var result = new Array(n+1);
        result[0] = [];
        result[0].push(null);

        //外层循环是计算n所对应的BST数组
        for (var len = 1; len <= n; len++)
        {
            result[len] = [];
            //BST数组的循环
            for (var j = 0; j < len; j++)
            {
                //左子树和右子树的循环
                for (var p = 0; p < result[j].length; p++)
                {
                    var left = result[j][p];  //左子结点
                    for (var q = 0; q < result[len-j-1].length;q++)
                    {
                        var right = result[len-j-1][q];  //右子结点

                        //跟结点
                        var node = new TreeNode(j+1);
                        node.left = left;
                        node.right = clone(right, j+1);  //右结点从j+1开始，而左子结点则从j开始
                        result[len].push(node);
                    }
                }
            }
        }
        return result[n];
    }

    /**
     * 得到以root 为跟结点，offset为结点的值的偏移量 返回的树
     * @param root
     * @param offset
     * @returns {*}
     */
    function clone(root,offset)
    {
        if (root === null)
            return null;
        var node = new TreeNode(root.val + offset);
        node.left = clone(root.left, offset);
        node.right = clone(root.right, offset);
        return node;
    }
};

var n = 4;
var result = generateTrees3(n);
console.log(result);