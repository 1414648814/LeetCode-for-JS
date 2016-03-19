
/*
 *思路：先对数组进行排序
 *	   从3个数中找出第一个值，然后剩下的两个数
 *     分别从第一个值的后一个位置和最后一个位置之间进行查找
 *     遇见和前面计算过的相同的，则跳过
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sort_nums = nums.sort(
        function (a,b) {
            return a-b;
        }
    );
    var length = sort_nums.length;
    var result = new Array();
    if (length < 3) {
        return result;
    }
    for (var i = 0; i < length-2; i++) {
        if (sort_nums[i] > 0) {
            return result;
        }
        if (sort_nums[i] == sort_nums[i-1]) {
           continue;
        }
        for (var p = i+1,q = length-1; p < q;) {
            if (sort_nums[i] + sort_nums[p] + sort_nums[q] == 0) {
                result.push([sort_nums[i], sort_nums[p], sort_nums[q]]);
                p++;
                q--;
                while (p < q && sort_nums[p] == sort_nums[p-1]) p++;
                while (p < q && sort_nums[q] == sort_nums[q+1]) q--;
            }
            else if (sort_nums[i] + sort_nums[p] + sort_nums[q] < 0) {
                p++;
            }
            else {
                q--;
            }
        }
    }
    return result;
};

// 对上面的方法的简化
var threeSum2 = function(nums) {
    nums = nums.sort(function(a, b) { return a - b; });

    var results = [];
    var i, j, k, n = nums.length;

    for (i = 0; i < n; ++i) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        for (j = i + 1; j < n; ++j) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;

            for (k = j + 1; k < n; ++k) {
                if (k > j + 1 && nums[k] === nums[k-1]) continue;

                if (nums[i] + nums[j] + nums[k] === 0) results.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return results;
};

/*
 *思路：先用数组统计每个数出现的次数，类似于键值对，然后对数组进行排序.
 *	   从3个数中找出第一个值
 *     从第一个值的后一个位置找出第二个值，
 *	   最后一个值通过键值对查找，大于0则存在
 *     最后没成功的话将第二个值后面的键值恢复＋1
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var results = [];

    if (!Array.isArray(nums) || nums.length < 3) {
        return results;
    }

    var map = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    nums.sort(function (a, b) {
        return a - b;
    });
    for (i = 0; nums[i] <= 0 && i < len - 1; i++) {
        var nNum = nums[i];
        map[nNum]--;
        if (i > 0 && nNum === nums[i - 1]) {
            continue;
        }
        for (var j = len - 1; j > i && nums[j] >= 0; j--) {
            var pNum = nums[j];
            map[pNum]--;
            if (j < len - 1 && pNum === nums[j + 1]) {
                continue;
            }
            var diff = 0 - nNum - pNum;
            if (map[diff] > 0) {
                results.push([nNum, diff, pNum]);
            }
            if (diff >= pNum) {
                j--;
                break;
            }
        }

        for (++j; j < len; j++) {
            map[nums[j]] += 1;
        }
    }

    return results;
};