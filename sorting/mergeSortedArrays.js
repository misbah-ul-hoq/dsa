"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergerSortedArrays = void 0;
const mergerSortedArrays = (arr1, arr2) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex <= arr1.length - 1 && rightIndex <= arr2.length - 1) {
        if (arr1[leftIndex] < arr2[rightIndex]) {
            result.push(arr1[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(arr2[rightIndex]);
            rightIndex++;
        }
    }
    if (leftIndex < arr1.length) {
        result.push(...arr1.slice(leftIndex));
    }
    else if (rightIndex < arr2.length) {
        result.push(...arr2.slice(rightIndex));
    }
    return result;
};
exports.mergerSortedArrays = mergerSortedArrays;
//[1, 3, 4] [2, 5, 6]
console.log((0, exports.mergerSortedArrays)([1, 2, 4, 5], [2, 4, 5, 10, 15, 18]));
