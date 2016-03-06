
var twoSum = function(nums,target) {
	var tempArray = {};
	for (var i = 0; i < nums.length; i++) {
		var offset = target - nums[i];
		var index = tempArray[offset];
		if (typeof index != "undefined") {
			var result = {index,i};
			return result; 
		}else{
			tempArray[nums[i]] = i;
		}
	}
	return null;
};

var twoSum = function(nums,target) {
	var saved = {};
	var result = [];
	for (var i = 0; i < nums.length; i++) {
		if (saved.hasOwnProperty(nums[i])) {
			result[0] = saved[nums[i]];
			result[1] = i;
			return result;
		}
		saved[target - nums[i]] = i;
	}

}


var twoSum = function(nums,target) {
	for (var i = 0; i < nums.length; i++) {
		var diff = target - nums[i],
		temp = nums[i],
		found;
		nums[i] = null;
		found = nums.indexOf(diff);
		if (found > -1) {
			return found < i ? [found,i] : [i,found];
		}
		nums[i] = temp;
	}
	return;
}