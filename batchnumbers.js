const addToBatch = (array, value) => {
  if (array.length < 5) {
    new_array = array.concat(value);
    console.log(new_array);
    return new_array
  } else {
    console.log(array);
    return array;
  }
}

addToBatch([1], 3);
addToBatch([1, 2, 3], 4);
addToBatch([], 8); 
addToBatch([1, 2, 3, 4, 5, 6], 7);
addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 