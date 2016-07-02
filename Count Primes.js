/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 1)
        return 0;
    var primes = new Array(n);
    var i,j;
    for (i = 2; i < n; i++) {
        if (i % 2)
            primes[i] = true;
        else
            primes[i] = false;
    }
    primes[2] = true;
    for (i = 3; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            for (j = i+i; j < n; j+= i)
                primes[j] = false;
        }
    }
    var count = 0;
    for (var p = 0; p < n; p++) {
        if (primes[p])
            count++;
    }
    return count;
};

/**
 * 先设置都为true，遇到一个数，将这个数的所有倍数的值都一率设置为false
 * @param n
 * @returns {number}
 */
var countPrimes = function(n) {
    var primes = new Array(n);
    for (var i = 2; i < n; i++) {
        primes[i] = true;
    }

    for (var i = 2; i < n; i++) {
        if (!primes[i]) continue;
        for (var j = i + i; j < n; j+=i) {
            primes[j] = false;
        }
    }

    var count = 0;
    for (var p = 0; p < n; p++) {
        if (primes[p])
            count++;
    }
    return count;
}

var n = 3;
var result = countPrimes(n);
console.log(result);