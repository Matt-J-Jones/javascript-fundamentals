const uppercaseMsg = (message) => {
  return message.toUpperCase();
}

const lowercaseMsg = (message) => {
  return message.toLowerCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

step_1 = transform("hello", uppercaseMsg);
console.log(step_1);
step_2 = transform(step_1, lowercaseMsg);
console.log(step_2);