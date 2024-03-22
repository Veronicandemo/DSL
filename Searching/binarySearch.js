const binarySearch = (array, searchValue) => {
  left = 0;
  right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (array[mid] === searchValue) {
      return mid;
    }
    if (array[mid] > searchValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
const array = [1, 3, 5, 7, 9];
const searchValue = 5;
console.log(binarySearch(array, searchValue));
