/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var lengthOfLIS = function(nums) {
    //1.边界判断
    if (nums.length === 0)
        return 0;

    //2.初始化数据
    var max = 1;
    var dp = new Array(nums.length);
    for (var i = 0; i < nums.length; i++)
        dp[i] = 1;

    //3.动态规划
    for (var i = 1; i < nums.length; i++)
    {
        for (var j = 0; j < i; j++)
        {
            if (nums[j] < nums[i])
            {
                dp[i] = Math.max(dp[j] + 1,dp[i]);
            }
        }
        max = Math.max(max, dp[i]);
    }
    console.log(dp);
    return max;
};

//2分法
var lengthOfLIS2 = function(nums) {
    if (nums.length == 2)
        return 0;
    var len = 0,N = nums.length;

    //数组用来存放nums中递增的数据
    var table = new Array(nums.length);
    table[len++] = nums[0];

    for (var i = 1; i < N; i++)
    {
        if (nums[i] < table[0]) //比数组第一个值还小的，重置数组
            table[0] = nums[i];
        else if (nums[i] > table[len-1])  //比数组的前一个大，则加入数组
            table[len++] = nums[i];
        else
            table[binarySearch(table, 0, N-1, nums[i])] = nums[i];   //比数组前一个小，则在数组中找到位置安放
    }

    return len;

    function binarySearch(table, start, end, target)
    {
        while (start < end)
        {
            var mid = start + Math.floor((end - start)/2);
            if (table[mid] >= target)
                end = mid;
            else
                start = mid+1;
        }
        return end;
    }
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18];
var result = lengthOfLIS2(nums);
console.log(result);