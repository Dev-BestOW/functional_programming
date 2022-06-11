function filterFn(arr, func) {
  const newArr = [];
  for(let el of arr) {
    const result = func(el);
    if(result) newArr.push(el);
  }
  return newArr;
}

const a = [1,2,3,4,5,6,7,8];

filterFn(a, (el) => el % 2 === 1); // [1,3,5,7];