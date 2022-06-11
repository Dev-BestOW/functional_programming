function add (first, second) {
  return first + second
}

function add (first) {
  return function (second) {
    return first + second
  }
}

const add10 = add(10);
add10(1) // 11