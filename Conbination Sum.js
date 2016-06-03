/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var length = candidates.length;
    candidates = candidates.sort(function(val1, val2) { // step 1
        return val1>val2?1:val1<val2?-1:0;
    });

    var result = new Array();

    helper(candidates,0,target,[],result);

    return result;
};

var helper = function (candidates,index,target,curr,result) {
    if(target === 0) {
        result.push(curr.slice());
        return;
    }

    for (var i = index;i < candidates.length;i++) {
        if (target < candidates[i]) {
            return;
        }
        curr.push(candidates[i]);
        helper(candidates,i,target - candidates[i],curr,result);
        curr.pop();
    }
};

var combinationSum2 = function(candidates, target) {
    var length = candidates.length;
    candidates = candidates.sort(function(val1, val2) { // step 1
        return val1>val2?1:val1<val2?-1:0;
    });

    var result = new Array();

    recur(0,[],target);

    return result;

    function recur(index,current,target){
        if(target === 0){
            result.push(current.slice());
            return;
        }
        if(target <= 0){
            return;
        }
        if(index === length){
            return;
        }
        current.push(candidates[index]);
        recur(index,current,target-candidates[index]);
        current.pop();
        recur(index+1,current,target);
    };
    
};


var array = [1,2,2,3],target = 7;
var result = combinationSum(array,7);
for (var i = 0;i < result.length;i++) {
    console.log(result[i].length);
}

/*
思路1:




思路2:


 */
