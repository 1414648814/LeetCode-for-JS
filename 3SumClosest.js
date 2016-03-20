/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(
    	function(a,b){
    		return a-b;
    });
    var diff = Number.MAX_VALUE,
    	closet = 0;
    for (var i = 0; i < nums.length-2; i++) {
		var low = i + 1,
			high = nums.length-1;
		while (low < high) {
			var sum = nums[i] + nums[low] + nums[high];
			if (sum == target) return sum;
			else if (sum < target){
				low++;
			}
			else {
				high--;
			}
			if (Math.abs(sum - target) < diff){
				diff = Math.abs(sum - target);	
				closet = sum;
			}
		}
    }
    return closet;
};