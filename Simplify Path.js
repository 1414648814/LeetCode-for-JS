
/**
 * @param {string} path
 * @return {string}
 *
 */
var simplifyPath = function(path) {
    var result = "";

    //1.边界判断
    if (path.length === 0 || path === null)
        return result;

    //2.判断入栈出栈
    var stack = [];
    for (var i = 0;i < path.length;i++)
    {
        if (path.charAt(i) === '/')
        {
            stack.push(path.charAt(i));
            while (path.charAt(i+1) === '/'){
                i++;
                continue;
            }
        }
        else if (path.charAt(i) === '.')
        {
            if (path.charAt(i+1) === '.')
                if (stack.length !== 0)
                    stack.splice(0,stack.length);
                else
                    continue;
            else
                continue;
        }
        else
        {
            stack.push(path.charAt(i));
        }
    }

    //3.结果判断
    if (stack.length > 1)
    {
        if (stack[0] !== '/')
            stack.unshift('/');
        if (stack[stack.length - 1] === '/')
            stack.pop();
    }
    else if(stack.length === 0)
    {
        stack.push('/');
    }


    //4.生成字符串
    for (var i = 0;i < stack.length;i++)
    {
        result += stack[i];
    }

    return result;
};


//正确的方法
var simplifyPath2 = function(path) {
    var stack = [];

    for (var i = 0;i < path.length;)
    {
        while (path.charAt(i) === '/' && i < path.length)
            i ++;
        var str = "";
        while (path.charAt(i) !== '/' && i < path.length)
            str += path.charAt(i++);
        if (str === ".." && stack.length !== 0)
            stack.pop();
        if (str !== "" && str !== "." && str !== "..")
            stack.push(str);
    }

    if(stack.length === 0)
    {
        return "/";
    }

    var result = "";
    while (stack.length !== 0)
    {
        result = "/" + stack[stack.length-1] + result;
        stack.pop();
    }

    return result;
}

/*
     path = "/home/", => "/home"
     path = "/a/./b/../../c/", => "/c"
     path = "/home//foo/" => "/home/foo"
*/

var path = "/abc/...";
var result = simplifyPath2(path);
console.log(result);
