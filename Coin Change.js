/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/**
 * 一维动态规划数组表示钱数为i时的最小硬币数的找零
 * dp[i] = min(dp[i], dp[i - coins[j]] + 1);
 * 其中coins[j]为第j个硬币，而i - coins[j]为钱数i减去其中一个硬币的值，
 * 剩余的钱数在dp数组中找到值，然后加1和当前dp数组中的值做比较，取较小的那个更新dp数组。
 */
var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1);
    for (var i = 0; i < dp.length; i++)
        dp[i] = amount + 1;

    dp[0] = 0;

    //外层循环代表硬币的数目
    for (var i = 1; i <= amount; i++)
    {
        //内层循环代表金币的种类
        for (var j = 0; j < coins.length; j++)
        {
            if (i >= coins[j])
                dp[i] = Math.min(dp[i], dp[i - coins[j]]+1)
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

var coins = [1, 2, 5];
var amount = 11;
var result = coinChange(coins,amount);
console.log(result)