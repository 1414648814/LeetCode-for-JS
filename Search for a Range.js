/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var length = nums.length;
    if (length < 1) {
		return [-1,-1];    	
    }
    else if (length == 1) {
    	if (nums[0] == target) {
    		return [0,0];
    	}
    	else {
    		return [-1,-1];
    	}
    }	
    else {
    	var n_start = n_end = 0;
    	var start = 0,
    		end = length-1;
    	var isStartChanged = true,
    		isEndChanged = true;

    	while (start < end) {
    		if (nums[start] == target) {
    			if (start > n_start && isStartChanged) {
    				n_start = start;
    				isStartChanged = false;
    			}
    		}
    		if (nums[end] == target) {
    			if (end > n_end && isEndChanged) {
    				n_end = end;
    				isEndChanged = false;
    			}
    		}
    		if (!isStartChanged && !isEndChanged) {
    			break;
    		}
    		if (nums[start] > target) {
    			start ++;
    		}
    		if (nums[end]) {
    			end--;
    		}
    	}
    	return [n_start,n_end];
    }
};


var searchRange = function (nums,target) {
    var length = nums.length;
    var start = 0,
        end = length-1;
    var result = new Array(-1,-1);
    while (start < end) {
        var mid = parseInt((start + end)/2);
        if (nums[mid] < target)
            start = mid + 1;
        else
            end = mid;
    }

    if (nums[start] != target) return result;
    else result[0] = start;

    end = length - 1;
    while (start < end) {
        var mid = Math.round((start + end)/2);
        if (nums[mid] > target)
            end = mid-1;
        else
            start = mid;
    }
    result[1] = end;
    return result;
};


var searchRange2 = function (nums,target) {
	vector<int> searchRange(vector<int>& nums, int target) {
        int n = nums.size();
        return search(nums, 0, n - 1, target);
    }
    vector<int> search(vector<int>& nums, int l, int r, int target) {
        if (nums[l] == target && nums[r] == target) return {l, r};
        if (nums[l] <= target && target <= nums[r]) {
            int mid = l + ((r - l) >> 1);
            vector<int> left = search(nums, l, mid, target);
            vector<int> right = search(nums, mid  +1, r, target);
            if (left[0] == -1) return right;
            if (right[0] == -1) return left;
            return {left[0], right[1]};
        }
        return {-1, -1};
    }

}

