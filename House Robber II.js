/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 核心思路：
 * 先计算从第1家到第n-2家的最大利益，用变量保存下来
 * 再计算从第2家到第n-1家的最大利益
 * 取两次的最大利益
 */
var rob = function(nums) {
    var length  = nums.length;
    //1.边界判断
    if (length === 0)
        return 0;
    else if (length === 1)
        return nums[0];
    else
    {
        //2.数组初始化
        var profit = new Array(length);

        //计算从第1家到第n-2家
        profit[0] = nums[0];
        for (var i = 1; i < length; i++) {
            profit[i] = Math.max(profit[i - 1], (i === 1 ? 0 : profit[i - 2]) + nums[i]);
        }
        var res = profit[length-1];
        console.log(profit);

        //计算从第2家到第n-1家
        profit[0] = nums[1];
        for (var i = 2; i < length; i++) {
            profit[i] = Math.max(profit[i - 1], (i === 2 ? 0 : profit[i - 2]) + nums[i]);
        }

        console.log(profit);

        return Math.max(res,profit[length-1]);
    }
};

var rob2 = function (nums) {
    var length  = nums.length;
    //1.边界判断
    if (length === 0)
        return 0;
    else if (length === 1)
        return nums[0];
    else
    {
        return Math.max(robSub(0, nums.length - 2),robSub(1, nums.length-1));
    }

    function robSub (start, end)
    {
        var len = end - start + 1;
        var dp = new Array(len);

        dp[0] = nums[start];
        dp[1] = Math.max(nums[start],nums[start+1]);

        for (var i=2; i < len; i++)
            dp[i] = Math.max(dp[i-2] + nums[start+i], dp[i-1]);
        return dp[len-1];
    }
};


var nums = [1, 2, 3];
var result = rob2(nums);
console.log(result);
