function reduceFn(arr, func, first) {
  let total = first ? first : arr[0];
  for(let [index, el] of arr.entries()) {
    if(index !== arr.length-1) {
      total = func(total, arr[index+1]);
    }
  }
  return total;
}
const a = [1,2,3,4];
reduceFn(a, (acc, crr) => acc + crr);
// 10;
/* 
  function에 return 값이 없으면 undefined를 반환한다.
  이때, total + total 이 아닌,
  total = undefined 가 되어버린다.
*/
reduceFn(a, (acc, crr) => {
    if(crr%2 === 0) {
        return acc + crr;
    }
});
// NaN (이유 => 1번 index 순서에서(요소 2), undefined + 숫자)
reduceFn(a, (acc, crr) => {
    if(crr%2 === 1) {
        return acc + crr;
    }
});
// undefined (이유 => 2번 index 순서에서(요소 3), total = undefined)