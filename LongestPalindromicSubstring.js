/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = "";

    var head = 0;
    var tail = 0;
    var count = 0;
    var maxcount = 0;
    var maxhead = 0;
    var maxtail = 0;

    for(var i=0;i<s.length();i++){
    	var tmp = i;
    	while(tmp<=s.length() && s.charAt(i)!= s.charAt(tmp)){
    		tmp++;
    	}
    	if (tmp==s.length()) {
    		continue;
    	}
    	head = i;
    	tail = tmp;
    	count = tmp - i +1;
    	for(var p=head,q = tail;head<=tail;p += 1,q -= 1){
    		if (s.charAt(p) == s.charAt(q)) {
    			continue;
    		}
    		else {
    			count = 0;
    			break;
    		}
    	}
    	if (count>maxcount) {
    		maxcount = count;
    		maxhead = head;
    		maxtail = tail;
    	}
    }
    result = s.substring(maxhead,maxtail)
    return result;
};