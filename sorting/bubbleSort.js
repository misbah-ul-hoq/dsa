"use strict";
const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
console.log(bubbleSort([34, 7, 23, 32, 5, 62, 32, 4, 12, 9]));
