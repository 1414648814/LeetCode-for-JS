/**
 * @param {number} n
 * @return {string[]}
 */

var isValid = function(s) {
    var length = s.length;
    var isValid = true;
    var array = [];
    for (var i = 0; i < length; i++) {
    	switch (s[i]){
    		case '(':
    			array.push(s[i]);
    			break;
    		case ')':
    			if (array.pop() != '(') {
    				isValid = false;
    				return isValid; 
    			}
    			else {
    				array.pop();
    			}
    			break;
    		
    	}
    }
    if (array.length > 0) {
    	isValid = false;
    }
    return isValid;
}

var generate = function(string,result) {
	//求出数组中括号的所有组合
    //接着判断组合满足格式的结果
}

var generateParenthesis = function(n) {
    var content = [],
        result = [];
    for (var i = 0; i < 2*n; i++) {
        i%2==0 ? content.push("(") : content.push(")");
        
    }
    result = generate(content);
    return result;
};



/*
    思路：count_left_par代表左边括号剩下的数目，
    count_right_par代表右边括号剩下的数目，
    通过DFS不断的递归，控制左右两边括号的数目；

*/

var addParentheses = function(result,string,count_left_par,count_right_par) {
    if (count_left_par == 0 && count_right_par == 0) {
        result.push(string);
        return;
    }
    if (count_right_par > 0)
        addParentheses(result, string + ')', count_left_par, count_right_par-1);
    if (count_left_par > 0)
        addParentheses(result, string + '(', count_left_par-1 , count_right_par+1);
}

var generateParenthesis = function(n) {
    var array = [];
    array = addParentheses(array, "", n, 0);
    return array;
}



var addParentheses2 = function(result, string, count_left_par,count_right_par) {
    if (count_left_par == 0 && count_right_par == 0) {
        result.push(string);
        return;
    }
    if (count_left_par > 0) 
        addParentheses2(result, string + '{', count_left_par-1, count_right_par);
    if (count_right_par > count_left_par)
        addParentheses2(result, string + '}', count_left_par, count_right_par-1);

}

var generateParenthesis = function(n) {
    var array = [];
    array = addParentheses(n);
    return array;
}

var generateParenthesis2 = function(n) {
    var array = [];
    array = addParentheses(array, "", n, n);
    return array;
}


var generateParenthesis = function(n) {
    var result = [];
    function addParentheses(string,count_left_par,count_right_par) {
        if (count_left_par == 0 && count_right_par == 0) {
            result.push(string);
            return;
        }
        if (count_left_par > 0)
            addParentheses(string + '(', count_left_par-1, count_right_par);
        if (count_right_par > count_left_par)
            addParentheses(string + ')', count_left_par, count_right_par-1);
    }
    addParentheses("",n,n);
    return result;
};






