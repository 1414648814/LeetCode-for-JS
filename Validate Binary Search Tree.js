function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
    核心思路：暴力遍历法
 */
var isValidBST = function(root) {
    if (root === null)
        return true;
    if (!isValidLeft(root.left, root.val) || !isValidRight(root.right, root.val))
        return false;
    return (isValidBST(root.left) && isValidBST(root.right));

    function isValidLeft (root, value)
    {
        if (root === null)
            return true;
        if (root.val >= value)
            return false;
        return isValidLeft(root.left, value) && isValidLeft(root.right, value);
    };

    function isValidRight (root, value)
    {
        if (root === null)
            return true;
        if (root.val <= value)
            return false;
        return isValidRight(root.left, value) && isValidRight(root.right, value);
    };

};

/*
    核心思路：中序遍历法，根据其值的数组判断
 */
var isValidBST2 = function(root) {
    //1.边界判断
    if (root === null)
        return true;
    else if (root.left === null && root.right === null)
        return true;

    var list = [];
    //2.中序遍历
    InOrderTravel (root);
    //3.判断结果
    for (var i = 1; i < list.length; i++)
    {
        if (list[i] <= list[i-1])
            return false;
    }
    return true;

    function InOrderTravel (root)
    {
        if (root === null)
            return;
        InOrderTravel(root.left);
        list.push(root.val);
        InOrderTravel(root.right);
    }
};

/*
    核心思路：同样是中序遍历法，不过不需要消耗o(n)的空间
    比较高级的中序遍历的写法，用一个pre变量保存之前的中序遍历的结点
 */
var isValidBST3 = function(root) {
    var pre = null;

    return helper(root);

    function helper (root)
    {
        if (root !== null)
        {
            if (!helper(root.left))
                return false;

            if (pre !== null && root.val <= pre.val)
                return false;

            pre = root;

            return (helper(root.right));
        }
        return true;
    }
};

var root = new TreeNode(1);
var left = new TreeNode(1);
root.left = left;
var result = isValidBST3(root);
console.log(result);