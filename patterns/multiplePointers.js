"use strict";
//
const countUniqueValues = (arr) => {
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            right++;
        }
        else {
            left++;
            arr[left] = arr[right];
        }
    }
    return left + 1;
};
console.log(countUniqueValues([2, 2, 2, 4, 5, 7, 8, 10]));
