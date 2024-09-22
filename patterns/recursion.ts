// Helper recursion
const odds = (array: number[]) => {
  const result: number[] = [];

  function oddChecker(arr: number[]) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    oddChecker(arr.slice(1));
  }

  oddChecker(array);
  return result;
};

// console.log(odds([-2, -3, 1, 3, 5, 6, 9, 10]));

// Pure Recursion

const oddsFilter = (arr: number[]): number[] | any => {
  let odds: number[] = [];
  if (arr.length === 0) return odds;
  if (arr[0] % 2 !== 0) {
    odds.push(arr[0]);
  }
  odds = odds.concat(oddsFilter(arr.slice(1)));
  return odds;
};

console.log(oddsFilter([1, 2, 3, 4, 10, 11]));
