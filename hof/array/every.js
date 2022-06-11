function everyFn(arr, func) {
  for(let el of arr) {
    const result = func(el);
    if(!result) return false;
  }
  return true;
}

const a = [1,2,3,4];
everyFn(a, (el) => typeof el === 'number'); // true

const b = [1,2,3,4,'가','나','다'];
everyFn(b, (el) => typeof el === 'number'); // false