"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bigArray_1 = __importDefault(require("./bigArray"));
const first = performance.now();
function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === value) {
            return mid;
        }
        else if (arr[mid] > value) {
            right = mid - 1;
        }
        else if (arr[mid] < value) {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(bigArray_1.default, 42949672));
const second = performance.now();
console.log("Binary search took ", second - first, " milli seconds");
//[1, 2, 3, 4, 5, 6, 7, 8,]
