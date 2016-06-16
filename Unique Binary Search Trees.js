/**
 * @param {number} n
 * @return {number}
 */
/**
 * 思路：
 * 假设其中
 * G(n)代表的是1到n的BST的数目，也就是题目要求的结果
 * F(i，n)代表的是以i为跟节点，n个节点的BST
 * 所以可以得到
 * G(n) = F(1,n) + F(2,n) + F(3,n) .... + F(n,n)
 *
 * 其中G(0) = G(1) = 1
 *
 * 还有F(i,n) = G(1,2,.....i-1) * G(i+1,i+2,...n)
 *
 * 其中G(i+1,i+2,...n) ＝ G(1,2,.....,n-i)
 *
 * 所以 F(i,n) = G(i-1) * G(n-i) 条件是 1 <= i <= n
 *
 * 综上可得：
 *
 * G(n) = G(0) * G(n-1) + G(1) * G(n-2) + … + G(n-1) * G(0)
 *
 */
var numTrees = function(n) {
    var G = new Array(n+1);
    G[0] = G[1] = 1;
    for (var i = 2;i <= n;i++)
        G[i] = 0;

    //外层循环是相乘的个数
    for (var i = 2;i <= n;i++)
    {
        //内层循环是具体相乘的两个数
        for (var j = 1;j <= i;j++)
        {
            G[i] += G[j-1] * G[i-j];
        }
    }

    return G[n];
};

var n = 2;
var result = numTrees(n);
console.log(result);