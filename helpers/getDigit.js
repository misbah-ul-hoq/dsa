"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDigit = getDigit;
exports.digitCount = digitCount;
exports.maxDigits = maxDigits;
function getDigitOne(num, digit) {
    const numReverseStr = num.toString().split("").reverse().join("");
    console.log(numReverseStr);
    return parseInt(numReverseStr[digit]) || 0;
}
// console.log(getDigitOne(123455, 50));
function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}
// console.log(getDigit(12442, 2));
function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
}
// console.log(digitCount(202));
function maxDigits(nums) {
    return digitCount(Math.max(...nums));
}
console.log(maxDigits([2, 1, 33, 12224, 42]));
