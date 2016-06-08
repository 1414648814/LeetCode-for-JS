/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * 思路：使用贪心策略，保持step始终是最大的能移动步数
 */
var canJump = function(nums) {
    if (nums.length == 0)
        return false;
    var step = nums[0];

    for(var i = 1;i < nums.length;i++){
        if(step > 0){
            step--;
            step = Math.max(step,nums[i]);
        }
        else
            return false;
    }
    return true;
};