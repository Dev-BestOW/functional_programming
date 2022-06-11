function forEachFn(arr, func) {
  for(let el of arr) {
    func(el);
  }
}

const a = [1,2,3,4];

forEachFn(a, (el) => console.log(el));

//1
//2
//3
//4