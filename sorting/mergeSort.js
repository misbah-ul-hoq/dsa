"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSortedArrays_1 = require("./mergeSortedArrays");
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return (0, mergeSortedArrays_1.mergerSortedArrays)(left, right);
};
console.log(mergeSort([3, 2, 4, 1]));
