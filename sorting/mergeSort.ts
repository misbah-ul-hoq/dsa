import { mergerSortedArrays } from "./mergeSortedArrays";

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergerSortedArrays(left, right);
};

console.log(mergeSort([3, 2, 4, 1]));
