import bigNumsArr from "./bigArray";

const first = performance.now();
function binarySearch(arr: number[], value: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      right = mid - 1;
    } else if (arr[mid] < value) {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(bigNumsArr, 42949672));
const second = performance.now();

console.log("Binary search took ", second - first, " milli seconds");
//[1, 2, 3, 4, 5, 6, 7, 8,]
