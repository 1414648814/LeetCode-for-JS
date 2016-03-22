/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/*
思路：先对数组进行排序，
	然后从数组中依次取出第一个数字，第二个数字
	接着从第二个数字后面定义low和high，循环移动
	其中要注意重复现象

*/
var fourSum = function(nums, target) {
    nums = nums.sort(function(a,b){
        return a-b;
    });
    var length = nums.length;
    var result = [];
    if (length < 4) return result;
    else if (length == 4) {
        if (nums[0]+nums[1]+nums[2]+nums[3] == target) {
            result.push(nums);
            return result;
        }
        else{
            return result;
        }
    }
    else{
        for (var i = 0; i < length-3;i++) {
            var first = nums[i];
            if (nums[i-1] == first) continue;
            for (var j = i+1; j < length-2;j++) {
                var second = nums[j];
                if (nums[j-1] == second && j!=i+1) continue;
                for (var third_low = j+1,third_high = length-1; third_low < third_high;) {
                    var third_sum = nums[third_low] + nums[third_high];
                    if (first + second + third_sum > target) third_high--;
                    else if (first + second + third_sum < target) third_low++;
                    else{
                        var array = [];
                        array.push(first,second,nums[third_low],nums[third_high]);
                        result.push(array);
                        third_low++;
                        third_high--;
                        while (third_low < third_high && nums[third_low] == nums[third_low-1]){
                            third_low++;
                        }
                        while (third_low < third_high && nums[third_high] == nums[third_high+1]) {
                            third_high--;
                        }
                    }
                }
            }
        }
    }
    return result;
};