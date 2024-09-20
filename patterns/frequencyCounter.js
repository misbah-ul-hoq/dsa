"use strict";
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        return false;
    const obj1 = {};
    const obj2 = {};
    for (let i of arr1) {
        obj1[i] = (obj1[i] || 0) + 1;
    }
    for (let i of arr2) {
        obj2[i] = (obj2[i] || 0) + 1;
    }
    for (const key in obj1) {
        // @ts-ignore
        if (!(key ** 2 in obj2)) {
            return false;
        }
        // @ts-ignore
        if (obj2[key ** 2] !== obj1[key])
            return false;
    }
    return true;
};
// same([1, 2, 3], [1, 4, 9]);
const validAnagram = (str1, str2) => {
    const filteredStr1 = str1.replaceAll(" ", "");
    const filteredStr2 = str2.replaceAll(" ", "");
    if (filteredStr1.length !== filteredStr2.length)
        return false;
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for (const i of filteredStr1) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
    }
    for (const i of filteredStr2) {
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
    }
    for (const key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        else if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
};
//{a: 1, b: 1, c: 2}, {b: 2, c: 1, a: 1}
console.log(validAnagram("rat", "car"));
