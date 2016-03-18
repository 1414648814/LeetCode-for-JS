/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var length = strs.length;
    var result = "";
    var maxlen_result = 0;
    if (length == 0) {
    	return "";
    }
    else if (length == 1) {
    	return strs[0];
    }
    else {
	    for (var i = 0,j = i + 1; i < length-1,j < length; i++,j++) {
	        var first_str = strs[i],
	            second_str = strs[j];
	        var sub_result = "";
	        maxlen_result = result.length;
	        for (var p = 0,q = 0; p < first_str.length,q < second_str.length; p++,q++) {
	            if (first_str.charAt(p) != second_str.charAt(q)) {
	                break;
	            }
	            else {
	                sub_result = first_str.substring(0,p+1);
	            }
	        }
	        var temp_length = sub_result.length;
	        result = temp_length > maxlen_result ? sub_result : result;
	    }
	    return result;
	}
};

