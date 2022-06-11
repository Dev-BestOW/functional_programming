function findFn(arr, func) {
  for(let el of arr) {
    const result = func(el);
    if(result) return el;
  }
}

const a = [1,2,3,4];

findFn(a, (el) => el > 10); // undefined;
findFn(a, (el) => el > 3); // 4;
findFn(a, (el) => el > 0); // 1;