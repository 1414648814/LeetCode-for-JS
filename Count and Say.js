/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var string = "21";
    n--;
    while(n--){
        var temp = "";
        for(var i =0;i<string.length;i++){
            var a = string.charAt(i);
            if(string.charAt(i) == '2'){
                temp+='12';
            }
            else if(string.charAt(i) == '1' && string.charAt(i+1) == '1' && i%2==0){
                temp+='21';
                i++;
                continue;
            }
            else if(string.charAt(i) == '1'){
                temp+='11';
            }
        }
        string = temp;
    }
    return string;
};

var countAndSay2 = function(n) {
    var result = "1";
    for (var outer = 1;outer < n;outer++){
        var previous = result;
        result = "";
        var count = 1;
        var say = previous.charAt(0);

        for (var i = 1;i < previous.length;i++) {
            if(previous.charAt(i)!=say){
                result = result + count + say;
                count = 1;
                say = previous.charAt(i);
            }
            else
                count++;
        }
        result = result + count + say;
    }
    return result;
}


var read = function(n){
    var ret = "";
    var curr = n.charAt(0);
    var count = 1;
    for(var i=1;i< n.length;i++){
        if(n.charAt(i) == curr)
            count++;
        else{
            ret = ret + count + curr;
            count = 1;
            curr = n.charAt(i);
        }
    }
    ret = ret+count+curr;
    return ret;
}

var countAndSay3 = function(n) {
    var result = "1";
    for (var outer = 1;outer < n;outer++){
        result = read(result);
    }
    return result;
}

var result = countAndSay2(3);
print(result);