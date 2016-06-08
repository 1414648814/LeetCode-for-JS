/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var length = nums.length;
    var sum = 0,maxsum = -2147483648;
    for(var i = 0;i < length;i++){
        sum += nums[i];
        if(sum > maxsum) maxsum = sum;
        if(sum < 0) sum = 0;
    }
    return maxsum;
};

var maxSubArray2 =  function(nums) {
    var length = nums.length;
    var max = nums[0];
    var dp = [];
    dp[0] = nums[0];

    for(var i = 1;i < length;i++){
        dp.push(nums[i] + (dp[i-1] > 0 ? dp[i-1] : 0));
        max = Math.max(max,dp[i]);
    }
    return max;
}