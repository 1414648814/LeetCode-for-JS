/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    var a = [];
    helper(n, 1, a);
    return result;

    function helper(sub, level, out) {
        if (sub < 0) return ;
        if (sub === 0 && out.length === k) result.push(out.slice());
        for (var i = level; i <= 9; i++) {
            out.push(i);
            helper(sub - i, i+1, out);
            out.pop();
        }
    }
};

/**
 * 使用的是原生态的js实现
 * 分为两个部分，包括结果的个数等于3个和不等于3个
 * @param k
 * @param n
 * @returns {Array}
 */
var combinationSum3 = function(k, n) {
    var solution = [];	// length=k all possible Combination
    var result = [];
    var used = [];	// [1,2,...,9] each element can only be used once

    var backTracking = function(m, n) {
        if(m==k){
            var sum = 0;
            for(var i=0; i<solution.length; ++i){
                sum += solution[i];
            }
            if(sum==n){
                console.log(solution);	// print out all possible
                result.push(solution.slice(0));
            }
        }else{
            for(var i=1; i<=9; ++i){
                if(used[i]){ continue; }	// when true, express the element(used[i]) has been used
                if(m>0 && solution[m-1]>i){ continue; }	// elements can only small to large order
                used[i] = true;
                solution[m] = i;
                arguments.callee(m+1, n);
                used[i] = false;
            }
        }
    }

    backTracking(0, n);

    return result;
};

var k = 3,
    n = 9;
var result = combinationSum3(k, n);
console.log(result);