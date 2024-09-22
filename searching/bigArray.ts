const bigNumsArr: number[] = [];

let i = 1;
while (true) {
  bigNumsArr.push(i);
  i++;
  if (i === 42949673) {
    break;
  }
}

export default bigNumsArr;
