/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let intNum = BigInt(digits.join("")) + BigInt(1)

    return intNum.toString().split("").map(Number);

};
