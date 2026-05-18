/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let wordsArr = s.split(" ");
    let lastWordLength = 0;
    let tempIdx = wordsArr.length - 1

    while (tempIdx >= 0) {

        let lastWord = wordsArr[tempIdx];

        if (lastWord != '') {
            lastWordLength = lastWord.length;
            break;
        }

        lastWord = wordsArr[tempIdx]
        tempIdx--;
    }

    return lastWordLength;
};
