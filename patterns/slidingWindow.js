"use strict";
const maxSubArraySum = (arr, elements) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < elements; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = elements; i < arr.length; i++) {
        tempSum = tempSum - arr[i - elements] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};
console.log(maxSubArraySum([10, 2, 5, 7, 2, 5], 3));
