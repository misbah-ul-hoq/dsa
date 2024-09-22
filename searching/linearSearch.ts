import bigNumsArr from "./bigArray";

const first = performance.now();
function linearSearch(arr: number[], value: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch(bigNumsArr, 42949672));
const second = performance.now();

console.log("Linear search took ", second - first, " milli seconds");
