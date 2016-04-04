/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var length = nums.length;
    var isfound = false;
    if (length == 1) {
    	if (nums[0] < target) return 1;
    	else return 0;
    }
    else {
    	if (nums[0] > target) return 0;
    	else if (nums[length-1] < target) return length;
	    for (var i = 0; i < length; i++) {
	    	if (nums[i] == target) {
	    		isfound = true;
	    		return i;
	    	}
	    	else if (!isfound && nums[i] < target && nums[i+1] >= target) {
	    		isfound = true;
	    		return i+1;
	    	}
	    }
	}

};

var searchInsert2 = function(nums,target) {
	var low = 0,
		high = nums.length-1;
	while (low <= high) {
		var mid = parseInt((low + high)/2);
		if (nums[mid] == target) {
			return mid;
		}
		if (nums[mid] > target)
			high = mid-1;
		else 
			low = mid+1;
	}
	return low;

};