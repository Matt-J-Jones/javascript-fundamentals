const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const personalisedGreeting = (name) => {
  return `Hi ${name.name}! ${name.discount}% off our best candies for you today!`
}

const generateMessages = (names_list) => {
  return names_list.map(personalisedGreeting);
}

console.log(generateMessages(namesAndDiscounts))