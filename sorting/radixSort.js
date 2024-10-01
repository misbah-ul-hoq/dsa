"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDigit_1 = require("../helpers/getDigit");
function radixSort(nums) {
    const largestNumDigits = (0, getDigit_1.maxDigits)(nums);
    for (let i = 0; i < largestNumDigits; i++) {
        let buckets = [[], [], [], [], [], [], [], [], [], []];
        for (let j = 0; j < nums.length; j++) {
            buckets[(0, getDigit_1.getDigit)(nums[j], i)].push(nums[j]);
        }
        nums = [].concat(buckets.flat(2));
    }
    return nums;
}
console.log(radixSort([12, 3, 56, 89, 22, 7, 45, 90, 1, 8]));
// [2, 1, 33, 12224, 42]
