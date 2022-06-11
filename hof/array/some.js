function someFn(arr, func) {
  for(let el of arr) {
    const result = func(el);
    if(result) return true;
  }
  return false;
}

const a = [2,4,6,8];
someFn(a, (el) => el % 2 === 1); // false;

const b = [2,4,6,8,9];
someFn(b, (el) => el % 2 === 1); // true;
