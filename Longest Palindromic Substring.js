/**
 * Created by George on 16/3/3.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = [-1, -1];
    var head = 0;
    var tail = 0;
    var count = 0;
    var maxcount = 0;
    var len = s.length;

    if (len==1) {
        return s;
    }
    for(var i=0;i<len;i++){
        head = i;
        while(i<len-1 && s.charAt(i)=== s.charAt(i+1)){
            i++;
        }
        tail = i;
        count = tail - head + 1;
        //offset表示可以移动的区间,去左右两边最小的
        for(var offset= 1;offset<=Math.min(head,len-tail-1);offset++){
            if (s.charAt(head - offset) === s.charAt(tail + offset)) {
                count += 2;
            } else {
                break;
            }
        }
        if(count>maxcount){
            maxcount = count;
            result[0] = head - offset + 1;
            result[1] = tail + offset - 1;
        }

    }
    result = s.substring(result[0],result[1] + 1);
    return result;
};

var longestPalindrome2 = function(s) {
    var result = "";
    for (var i=0;i<s.length;i++) {
        var p = q = i;
        while (q< s.length-1 && s.charAt(q) == s.charAt(q+1)) {
            q++;
        }
        for (;p>=0 && q<= s.length-1 && s.charAt(p)== s.charAt(q);p--,q++) {
            if (q-p+1> result.length) {
                result = s.substring(p,q+1);
            }
        }
    }
    return result;
}


var result = longestPalindrome2("adddddddasc");
print(result);