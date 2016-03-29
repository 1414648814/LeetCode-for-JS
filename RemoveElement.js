/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 /*
	思路：现将数组进行排序，统计等于指定值的个数，
	一并删除
 */
var removeElement = function(nums, val) {
    nums = nums.sort(function(a,b){
        return a-b;
    });
    if (nums.length == 0) return nums;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            var count = 1;
            var temp = i;
            while (i < nums.length && nums[i] == nums[i+1]) {
                count++;
                i++;
            }
            count = count==0 ? 1 : count;
            nums.splice(temp,count);
            i = --temp;;
        }
    }
    return nums.length;
};

/*
    思路：计算在不等于值的情况下，将其所在的位置i
    赋给专门统计不等于指定值用的位置begin，进行替换；
*/
var removeElement2 = function(nums, val) {
    var begin=0;
    for(var i=0; i < nums.length; i++) 
        if(nums[i]!=val) 
            nums[begin++]=nums[i];
    return begin;

}