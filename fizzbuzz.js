function fizzbuzz (number) {
  if (number % 3 === 0 && number % 5 === 0){
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz'
  } else if (number % 5 === 0) {
    return 'Buzz'
  } else {
    return number;
  }
}

module.exports = fizzbuzz;

// console.log(fizzbuzz(1))
// console.log(fizzbuzz(2))
// console.log(fizzbuzz(3))
// console.log(fizzbuzz(4))
// console.log(fizzbuzz(5))
// console.log(fizzbuzz(6))
// console.log(fizzbuzz(7))
// console.log(fizzbuzz(8))
// console.log(fizzbuzz(9))
// console.log(fizzbuzz(10))
// console.log(fizzbuzz(11))
// console.log(fizzbuzz(12))
// console.log(fizzbuzz(13))
// console.log(fizzbuzz(14))
// console.log(fizzbuzz(15))


// console.log(fizzbuzz(18))
// console.log(fizzbuzz(20))