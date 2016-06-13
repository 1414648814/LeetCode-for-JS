/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b){
        return a - b;
    });
    var result = [];
    helper([],0);
    return result;

    function helper(currents,level)
    {
        //叶子节点则加入到result中
        if (level === nums.length)
        {
            result.push(currents.slice());
            return;
        }
        //对于非叶子节点，不将当前元素加入到currents中
        helper(currents,level + 1);
        currents.push(nums[level]);
        helper(currents,level + 1);
        currents.pop();
    }
};


var subsets2 = function(nums) {
    nums.sort(function(a,b){
        return a - b;
    });
    var result = [];
    helper([],0);
    return result;

    function helper(currents,level)
    {
        result.push(currents.slice());
        for (var i = level;i < nums.length;i++) {
            currents.push(nums[level]);
            helper(currents, level + 1);
            currents.pop();
        }
    }
};

/**
 * 思路：
 * 1.先增加一个空子集
 * 2.增加第一个元素
 * 3.增加后面的一个元素
 * 4.将数组的最后子集和前面的子集进行组合
 * @param nums
 * @returns {Array}
 */
var subsets3 = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    var result = [];
    result.push([].slice());

    for (var i = 0;i < nums.length;i++)
    {
        var n = result.length;
        for (var j = 0;j < n;j++)
        {
            result.push(result[j].slice());
            result[result.length-1].push(nums[i]);
        }
    }
    return result;

}

var nums = [1,2,3];
var result = subsets3(nums);
console.log(result);