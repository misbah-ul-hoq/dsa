const same = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) return false;
  const obj1: any = {};
  const obj2: any = {};
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
    if (obj2[key ** 2] !== obj1[key]) return false;
  }
  return true;
};
same([1, 2, 3], [1, 4, 9]);
