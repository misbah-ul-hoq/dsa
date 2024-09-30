"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pivot = pivot;
function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
console.log(pivot([2, 1, 3, 7, -1, 0]));
