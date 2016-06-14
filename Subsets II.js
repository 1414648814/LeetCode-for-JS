/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    var result = [];
    helper([],0);
    return result;

    function helper(currents,level)
    {
        result.push(currents.slice());
        for (var i = level;i < nums.length;i++) {
            if (i !== level && nums[i] === nums[i-1])
                continue;
            currents.push(nums[i]);
            helper(currents, i + 1);
            currents.pop();
        }
    }
};


var nums = [1,2];
var result = subsetsWithDup(nums);
console.log(result);