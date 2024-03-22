// Linear search on an ordered array
const linearSearch = (array, searchValue) => {
  // Iterate through every element in the array
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // If we find the value we're looking for, we return its index:
    if (element === searchValue) {
      return index;
    }
    // If we reach an element that is greater than the value we're looking for,
    // we can exit the loop early:
    else if (element > searchValue) {
      break;
    }
  }
  // We return null if we do not find the value within the array:
  return null;
};
const array = [1, 3, 5, 7, 9];
const searchValue = 5;
console.log(linearSearch(array, searchValue)); // Output: 2 (index of the searched value)

// Linear Search search for an unordered array
const LinearSearch = (array, searchValue) => {
  // iterate through every element in the array
  for (let index = 0; index < array.length; index++) {
    if (array[index] === searchValue) {
      return index;
    }
  }
  // if the value is not found we return -1
  return -1;
};
const arr = [9, 5, 2, 7, 1];
const sValue = 7;
console.log(LinearSearch(arr, sValue));
