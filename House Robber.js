/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var length = nums.length;
    if (length === 0)
        return 0;
    else if (length === 1)
        return nums[0];
    else
    {
        var profit = new Array(length);
        profit[0] = nums[0];
        profit[1] = Math.max(nums[0],nums[1]);

        for (var i = 2; i < length; i++)
            profit[i] = Math.max(profit[i-2]+nums[i], profit[i-1]);
        return profit[length-1];
    }
};

var nums = [1, 8, 5, 20];
var result = rob(nums);
console.log(result);