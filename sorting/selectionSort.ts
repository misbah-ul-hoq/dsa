const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[i], arr[j]);
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = min;
      arr[minIndex] = temp;
    }

    // if (noSwap) break;
  }
  return arr;
};

console.log(selectionSort([0, 1, 2, 1, 3, 4, 5]));
// [2, 1, 4, 3]
