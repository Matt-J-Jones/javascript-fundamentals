const numbers = [1,2,3,4,5,6,7,8,9,10];
let return_value = 0

numbers.forEach((number) => {
  return_value += number;
})

console.log(return_value);