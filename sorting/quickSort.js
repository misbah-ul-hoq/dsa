"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pivot_1 = require("./pivot");
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = (0, pivot_1.pivot)(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
console.log(quickSort([
    1000,
    1,
    -1,
    5000,
    -1000,
    0,
    999,
    1000,
    -500,
    -500,
    42,
    -42,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    0,
    500,
    0,
    -1000,
    -10000,
    123,
    123,
    5000,
    -123,
    -999,
    42,
    -42,
    9999,
]));
