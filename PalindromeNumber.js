/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	var string = x + "";
	var isPalindrome = false;

	var head = 0;
	var tail = 0;
	var len = string.length;
	if (len == 1) {
		isPalindrome = true;
		return isPalindrome;
	}
	if (x<0) {
		isPalindrome = false;
		return isPalindrome;
	}
	for (var i = 0,j = len-1; i < len,j >= 0; i++,j--) {
		head = i;
		tail = j;
		if (j<i) {
			isPalindrome = true;
			return isPalindrome;
		}
		if (string.charAt(head)==string.charAt(tail)) {
			continue;
		}	
		else {
			isPalindrome = false;
			return isPalindrome;
		}

	}
    
};