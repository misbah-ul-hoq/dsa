"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bigArray_1 = __importDefault(require("./bigArray"));
const first = performance.now();
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return i;
    }
    return -1;
}
console.log(linearSearch(bigArray_1.default, 42949672));
const second = performance.now();
console.log("Linear search took ", second - first, " milli seconds");
