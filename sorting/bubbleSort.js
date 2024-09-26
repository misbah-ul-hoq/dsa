"use strict";
const bubbleSort = (arr) => {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwap = false;
            }
        }
        // if (noSwap) break;
    }
    return arr;
};
console.log(bubbleSort([7, 1, 2, 3, 4, 5, 6]));
