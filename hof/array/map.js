function mapFn(arr, func) {
  const newArr = new Array(arr.length);
  for(let [index, el] of arr.entries()) {
    const result = func(el, index);
    if(result) newArr[index] = result;
  }
  return newArr;  
}

const a = [1,2,3,4];

mapFn(a, (el, index) => {
  console.log(index);
  if(el%2 === 1) {
    return el + 1;
  }
});

// 0
// 1
// 2
// 3
// [2, empty, 4, empty]