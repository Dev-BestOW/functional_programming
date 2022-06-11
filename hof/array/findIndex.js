function findIndexFn(arr, func) {
  for(let [index, el] of arr.entries()) {
    const result = func(el);
    if(result) return index;
  }
  return -1;
}

const a = [1,2,3,4];

findIndexFn(a, (el) => el > 10); // -1;
findIndexFn(a, (el) => el > 3); // 3;
findIndexFn(a, (el) => el > 0); // 0;