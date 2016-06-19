/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 需要分别计算两次买的最大的Profit，但是第二次买的不能在第一次卖的左边，因为只能持有一支股票
 * F1 表示左边交易到达的最大利益
 * F2 表示右边交易到达的最大利益
 * 最后求F1 + F2的最大利益
 */
var maxProfit = function(prices) {
    //1.边界判断
    if (prices.length < 2)
        return 0;

    //2.DP数组规划
    var F1 = new Array(prices.length);
    for (var i = 0; i < F1.length; i++)
        F1[i] = 0;

    var F2 = new Array(prices.length);
    for (var i = 0; i < F2.length; i++)
        F2[i] = 0;

    //3.第一次买的动态规划
    var curMin= prices[0];
    for (var i = 1; i < prices.length; i++)
    {
        curMin = Math.min(curMin, prices[i]);
        F1[i] = Math.max(F1[i-1], prices[i] - curMin);
    }

    //4.第二次买的动态规划
    var curMax = prices[prices.length - 1];
    for (var i = prices.length - 2; i >=0; i--)
    {
        curMax = Math.max(curMax, prices[i]);
        F2[i] = Math.max(F2[i+1], curMax - prices[i]);
    }

    //5.总和做到最大profit
    console.log(F1);
    console.log(F2);

    var sum = 0;
    for (var i = 0; i < prices.length; i++)
        sum = Math.max(sum, F1[i] + F2[i]);

    return sum;
};

var prices = [2, 4, 1, 20, 12];
var sum = maxProfit(prices);
console.log(sum);