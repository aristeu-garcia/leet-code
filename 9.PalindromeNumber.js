/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let invert = '';
    for (let i = x.toString().length -1; i >= 0; i--) {
        console.log(x.toString()[i]);
        invert = invert + x.toString()[i];
    }

    return invert === x.toString()
};

console.log(isPalindrome(121));