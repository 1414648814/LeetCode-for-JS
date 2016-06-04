/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var length = candidates.length;
    candidates = candidates.sort(function (a,b) {
        return a > b ? 1 : a < b ? -1 : 0;
    });

    var result = new Array();
    helper(0,candidates,target,[],result);

    return result;

};
var helper = function (index, candidates, target, current,result) {
    if(target == 0){
        result.push(current.slice());
        return;
    }
    var entered = 0;
    for (var i = index;i < candidates.length;i++) {
        if (entered != candidates[i]) {
            if (target < candidates[i]) return;
            current.push(candidates[i]);
            entered = candidates[i];
            helper(i+1,candidates,target - candidates[i],current,result);
            current.pop();
        }
    }
};

var helper2 = function (index, candidates, target, current,result) {
    if (target < 0) return;
    else if(target == 0){
        result.push(current.slice());
        return;
    }
    else {
        for (var i = index;i < candidates.length;i++) {
            if (i > index && candidates[i] == candidates[i-1]) continue;
            current.push(candidates[i]);
            helper2(i+1,candidates,target - candidates[i],current,result);
            current.pop();
        }
    }
};

var helper3 = function (index, candidates, target, current,result) {
    if (target < 0) return;
    else if(target == 0){
        result.push(current.slice());
        return;
    }
    else {
        for (var i = index;i < candidates.length;i++) {
            if (target < candidates[i]) return;
            current.push(candidates[i]);
            helper3(i+1,candidates,target - candidates[i],current,result);
            current.pop();
            while(i+1 < candidates.length && candidates[i] == candidates[i+1]) i++;
        }
    }
};

var combinationSum2 = function(candidates, target) {
    var length = candidates.length;
    candidates = candidates.sort((a,b) => a - b);
    var result = new Array();
    recur(0,[],target);

    return result;

    function recur(index,current,target){
        if(target === 0 && index === length){
            result.push(current.slice());
            return;
        }
        if(target < 0 || index === length){
            return;
        }
        current.push(candidates[index]);
        recur(index+1,current,target-candidates[index]);
        current.pop();
        if (current[current.length-1] !== candidates[index])
            recur(index+1,current,target);
    };

};


var array = [1],target = 2;
var result = combinationSum2(array,target);
for (var i = 0;i < result.length;i++) {
    console.log(result[i].length);
}