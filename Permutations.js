/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = new Array();
    if (nums.length == 0 || nums == null){
        result.push(nums);
        return result;
    }

    helper(0);
    return result;

    function swap(array,i,j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function helper(index){
        if (index == nums.length) {
            var current = new Array();
            for (var i = 0;i < nums.length;i++) {
                current.push(nums[i]);
            }
            result.push(current);
        }
        for (var p = index;p < nums.length;p++) {
            swap(nums,p,index);
            helper(index+1);
            swap(nums,p,index);
        }
    }
};

// 向数组中插入指定位置
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};



var nums = [1,2,3];
var result = permute2(nums);
console.log(result);