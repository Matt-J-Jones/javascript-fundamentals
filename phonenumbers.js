const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const isTenCharsOrLess = (string) => {
  if (string.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (numbers) => {
  filtered_list = numbers.filter(isTenCharsOrLess);
  console.log(filtered_list);
  return filtered_list;
}

filterLongNumbers(numbers);
filterLongNumbers(['4763687363', '7867867862']); 
filterLongNumbers([]);