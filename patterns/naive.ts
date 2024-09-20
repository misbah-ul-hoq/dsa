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

console.log(validAnagram("dormitory", "dirty    room"));
