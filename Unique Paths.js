/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var path = new Array();
    for(var i = 0;i < m;i++){
        path[i] = new Array();
        for(var j = 0;j < n;j++){
            path[i][j] = 0;
        }
    }

    for(var i = 0;i < m;i++){
        path[i][0] = 1;
    }

    for(var i = 0;i < n;i++){
        path[0][i] = 1;
    }

    for(var i = 1;i < m;i++){
        for(var j = 1;j < n;j++) {
            path[i][j] = path[i-1][j] + path[i][j-1];
        }
    }
    return path[m-1][n-1];
};

var uniquePaths2 = function(m, n) {
    var path = new Array();
    for(var i = 0;i < n;i++){
        path[i] = 1;
    }
    for(var i = 1;i < m;i++){
        for(var j = 1;j < n;j++){
            path[j] += path[j-1];
        }
    }
    return path[n-1];

}

var uniquePaths3 = function(m, n) {
    var row = Math.min(m,n);
    var col = Math.max(m,n);

    var path = new Array(col);
    for (var j = 0;j < col;j++){
        path[j] = 1;
    }
    for (var i = 1;i < row;i++){
        path[i] *= 2;
        for (var j = i+1;j < col;j++){
            path[j] += path[j-1];
        }
    }
    return path[col-1];
}

var m = 3,n = 3;
var result = uniquePaths2(m,n);
console.log(result);