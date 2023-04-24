function getNumberSign (number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

console.log(getNumberSign(3))
console.log(getNumberSign(0))
console.log(getNumberSign(-5))