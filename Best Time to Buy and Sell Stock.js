/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 核心思路：
 * 1.取得价格数组里面最小的值
 * 2.取价格差里面最大的值
 */
var maxProfit = function(prices) {
    //1.边界判断
    if (prices.length < 2)
        return 0;

    //2.动态规划
    var maxProfit = 0;
    var curMin = prices[0];

    for (var i = 1; i < prices.length; i++)
    {
        curMin = Math.min(curMin,prices[i]);
        maxProfit = Math.max(maxProfit,prices[i] - curMin);
    }

    return maxProfit;
};
