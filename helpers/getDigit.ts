function getDigitOne(num: number, digit: number) {
  const numReverseStr = num.toString().split("").reverse().join("");
  console.log(numReverseStr);

  return parseInt(numReverseStr[digit]) || 0;
}

// console.log(getDigitOne(123455, 50));

export function getDigit(num: number, index: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

// console.log(getDigit(12442, 2));

export function digitCount(num: number) {
  return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
}
// console.log(digitCount(202));

export function maxDigits(nums: number[]) {
  return digitCount(Math.max(...nums));
}

console.log(maxDigits([2, 1, 33, 12224, 42]));
