"use strict";
function getlargestNumber(arr) {
    var result = 0;
    for (var index = 0; index < arr.length; index++) {
        if (result < arr[index]) {
            result = arr[index];
        }
    }
    /* if (result > 0) {
        result = true;
    }else{
        result = false;
    }; */
    return result;
}
var score = [1, 2, 3, 4, 5, 6];
var highestScore = getlargestNumber(score);
console.log(highestScore);
//# sourceMappingURL=4_타입스크립트와자바스크립트비교.js.map