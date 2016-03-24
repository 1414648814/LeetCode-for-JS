/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var length = s.length;
    var isValid = true;
    var array = [];
    for (var i = 0; i < length; i++) {
    	switch (s[i]){
    		case '(':
    		case '{':
    		case '[':
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
    		case '}':
    			if (array.pop() != '{') {
    				isValid = false;
    				return isValid;
    			}
    			else {
    				array.pop();
    			}
    			break;
    		case ']':
    			if (array.pop() != '[') {
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

};