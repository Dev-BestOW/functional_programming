function add (first, second) {
  return first + second
}

function add (first) {
  return function (second) {
    return first + second
  }
}

const addByArrow = (first) => (second) => {
  return first + second
}

const add10 = add(10);
add10(1) // 11
add(10)(1) // 11
addByArrow(10)(1) // 11


