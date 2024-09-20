const validAnagramNaive = (str1: string, str2: string) => {
  const filteredStr1 = str1
    .split("")
    .filter((item) => item !== " ")
    .join("");

  const filteredStr2 = str2
    .split("")
    .filter((item) => item != " ")
    .join("");

  if (filteredStr1.length !== filteredStr2.length) return false;
  for (const i of filteredStr1) {
    if (!filteredStr2.includes(i)) {
      return false;
    }
  }
  return true;
};

// console.log(validAnagram("dormitory", "dirty    room"));

const maxSubArraySumNaive = (arr: number[], elements: number) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length - elements + 1; i++) {
    let temp = 0;
    for (let j = 0; j < elements; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

console.log(maxSubArraySumNaive([1, 1, 2, 3, 2, 5, 1], 2));
