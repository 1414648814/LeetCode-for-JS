/**
 * @param {number[][]} triangle
 * @return {number}
 */
//方法错误，没有考虑到需要相邻的情况
var minimumTotal = function(triangle) {
    //1.条件判断
    if (triangle.length === 0 || triangle === null)
        return 0;

    //2.构建DP数组
    var DP = new Array(triangle.length);

    //3.初始化DP
    DP[0] = triangle[0][0];

    //4.计算DP路径之和
    for (var i = 1; i < triangle.length; i++)
    {
        var min = 2147483647;
        for (var j = 1; j <= triangle[i].length; j++)
        {
            if (Math.min(triangle[i][j-1],min) !== min)
            {
                min = triangle[i][j-1];
            }

        }
        DP[i] = min + DP[i-1];
    }

    return DP[triangle.length-1];

};

/**
 *
 * 核心思路：
 * 新建一个空间为n的数组，用来存储
 * 从最下面遍历到最上层，下一行的结果根据上一行的路径累计和而计算
 * 外层循环是层的数目
 * 内层循环是每一层的元素
 *
 * @param triangle
 * @returns {*}
 */
var minimumTotal2 = function(triangle) {
    var length = triangle.length;
    var dp = triangle[length-1];

    for (var layer = length -2; layer >= 0; layer--)
    {
        for (var j = 0; j <= layer; j++)
        {
            dp[j] = Math.min(dp[j + 1], dp[j]) + triangle[layer][j];

        }
    }

    return dp[0];
};

/**
 * 核心思路：在原来数组的基础上，进行修改
 * 利用每一层的每个元素保存下之前计算的最小路径和，一直计算到顶。
 * @param triangle
 * @returns {*}
 */
var minimumTotal3 = function(triangle) {
    var length = triangle.length;

    for (var layer = length -2; layer >= 0; layer--)
    {
        for (var j = 0; j <= layer; j++)
        {
            triangle[layer][j] += Math.min(triangle[layer+1][j],triangle[layer+1][j+1]);
        }
    }
    console.log(triangle);
    return triangle[0][0];
};


/**
 法一：从上到下， 下一行的结果根据上一行的路径累计和而计算。
 triangle[i][j] += min(triangle[i -1 [j -1 ],triangle[i -1 ][j ] ) ，这样需要处理j=0和j=最大值。

 法二：从下往上，每一行的结果根据下面一行的路基累计和而计算。（参考大神才晓得）
 triangle[i][j] += min(triangle[i + 1][j], triangle[i + 1][j + 1])
 */

var triangle =
    [[-1],[2,3],[1,-1,-3]]
var result = minimumTotal(triangle);
console.log(result);