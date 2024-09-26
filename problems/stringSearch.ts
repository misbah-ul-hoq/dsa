function stringSearch(longStr: string, shortStr: string) {
  let counts = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        break;
      }
      if (j === shortStr.length - 1) {
        counts++;
      }
    }
  }

  return counts;
}

console.log(stringSearch("lorie loled", "lol"));
//wowomg  wo: 2 owo: 1
