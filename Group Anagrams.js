/**
 * @param {string[]} strs
 * @return {string[][]}
 */

HashMap2 = function () {
    //members
    this.keyArray = new Array();
    this.valArray = new Array();
}

HashMap2.prototype = {
    constructor : HashMap2,
    put : function(key,val)
    {
        var index = this.find(key);
        if(index == -1)
        {
            this.keyArray.push(key);
            this.valArray.push(val);
        }
        else
        {
            this.valArray[index] = val;
        }
        return ;
    },

    get : function(key)
    {
        var result = new Array();
        var index = this.find(key);

        if(index != -1)
        {
            result = this.valArray[index];
        }
        return result;
    },

    remove : function(key)
    {
        var result = null;
        var index = this.find(key);

        if(index != -1)
        {
            this.keyArray.removeAt(index);
            this.valArray.removeAt(index);
        }
        return ;
    },

    size : function()
    {
        return (this.keyArray.length);
    },

    clear : function()
    {
        for(var i = 0;i < this.keyArray.length;i++)
        {
            this.keyArray.pop();
            this.valArray.pop();
        }
        return ;
    },

    keySet : function()
    {
        return (this.keyArray);
    },

    valSet : function()
    {
        return (this.valArray);
    },

    find : function(key)
    {
        var result = -1;

        for(var i = 0;i < this.keyArray.length;i++)
        {
            if(this.keyArray[i] == key)
            {
                result = i;
                break ;
            }
        }
        return result;
    },

    removeAt : function(index)
    {
        var front = this.slice(0,index);
        var back = this.slice(index+1);

        return front.concat(back);
    },

    showAll : function()
    {
        var result = "";

        for(var i = 0;i < this.keyArray.length;i++){
            result += "Key: " + this.keyArray[ i ] + "\tValues: " + this.valArray[ i ] + "\n";
        }
        return result;
    }
}


var groupAnagrams = function(strs) {
    strs.sort();
    var map = new HashMap2();
    var result = [];
    for(var i = 0;i < strs.length;i++)
    {
        var curStr = strs[i];
        var sortStr = curStr.split('').sort().join('');

        var tempArr = map.get(sortStr);
        tempArr.push(curStr);

        map.put(sortStr,tempArr);
    }
    for(var i = 0;i < map.keyArray.length;i++)
    {
        result.push(map.valArray[i]);
    }
    return result;
};


var groupAnagrams2 = function(strs)
{
    strs = strs.sort();

    var  mapping = [];
    for (var i = 0;i < strs.length;i++)
    {
        var currstr = strs[i];
        var sortstr = currstr.split('').sort().join('');

        if(mapping[sortstr] === undefined)
        {
            mapping[sortstr] = [currstr];
        }
        else
        {
            mapping[sortstr].push(currstr);
        }
    }

    var ouput = [];
    for (var key in mapping)
    {
        ouput.push(mapping[key]);
    }
    return ouput;
}

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var result = groupAnagrams(strs);
console.log(result);