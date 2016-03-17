/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var length = height.length;
    var left_value = height[0];
    var right_value = height[length - 1];
    var i = 0,
    	j = length - 1;
    var maxValue = 0;
    while (i<j) {
    	var temp = Math.min(left_value,right_value) * (j-i);
    	maxValue = Math.max(temp,maxValue);
    	if (left_value < right_value) {
    		while (i<j && height[i]<=left_value) {
    			i++;
    		}
    		left_value = height[i];
    	}
    	else{
    		while (i<j && height[j]<=right_value) {
    			j--;
    		}
    		right_value = height[j];
    	}
    }
    return maxValue;

};


var maxArea2 = function(height) {
    var length = height.length;
    var i = 0,
        j = length - 1;
    var maxValue = 0;
    while (i<j) {
        var temp = Math.min(height[i],height[j]) * (j-i);
        maxValue = Math.max(temp,maxValue);
        if (height[i] < height[j]) {
            i++;
        }
        else if (height[i] > height[j]) {
            j--;
        }
        else {
            i++;
            j--;
        }
    }
    return maxValue;

};