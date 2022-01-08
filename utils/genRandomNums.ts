const genRandomNums = (upperBound: number, n: number): number[] => {
  const randIdxs = [];
  while (randIdxs.length < n) {
    var r = Math.floor(Math.random() * upperBound);
    if (randIdxs.indexOf(r) === -1) randIdxs.push(r);
  }
  return randIdxs;
};

export default genRandomNums;
