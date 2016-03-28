/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
	遇到相同的则使用js的函数splice删除
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    else if (nums.length == 1) return 1;
    else {
        for (var i = 1; i < nums.length;i++) {
            if (nums[i - 1] == nums[i]) {
                nums.splice(i, 1);
                i--;
            }
        }
    }
    return nums.length;

};
