/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = new Array();
    if (nums.length == 0) {
        result.push(nums);
        return result;
    }
    helper(0,nums.length);

    function swap(array,i,j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function isunique(array,begin,index){
        for(var i = begin;i < index;i++) {
            if (array[i] == array[index]){
                return false;
            }
        }
        return true;
    }

    function helper(begin,end){
        if(begin == nums.length) {
            var current = new Array();
            for (var i = 0;i < nums.length;i++) {
                current.push(nums[i]);
            }
            result.push(current);
        }
        for (var i = begin;i < end;i++) {
            if(isunique(nums,begin,i)){
                swap(nums,i,begin);
                helper(begin+1,end);
                swap(nums,i,begin);
            }
        }
    }
    return result;
};


var permuteUnique2 = function(nums) {
    var result = new Array();
    if (nums.length == 0) {
        result.push(nums);
        return result;
    }
    var visited = [];
    helper(visited,[]);

    function helper(visited,path){
        if(path.length == nums.length) {
            result.push(path);
            return;
        }
        for (var i = 0;i < nums.length;i++) {
            if (visited[i] || (i > 0 && nums[i] == nums[i-1] && !visited[i-1])){
                continue;
            }
            var temp = path.slice();
            temp.push(nums[i]);
            visited[i] = true;
            helper(visited,temp);
            visited[i] = false;
        }
    }
    return result;
};

var nums = [1,1,3];
var result = permuteUnique2(nums);
console.log(result);