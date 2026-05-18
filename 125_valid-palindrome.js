/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    if (cleanedStr.split("").reverse().join("") === cleanedStr) {
        return true;
    }

    return false;
};
