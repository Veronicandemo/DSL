const array = [2, 0, 4, 9, 14, 23, 7]; //arr of random numbers that are almost sorted
// store the value to be sorted in a variable, key
// shift all values that are greater than the value to be sorted towards the right
//  looking for the correct spot to insert the unsorted value

const insertionSort = (arr) => {
  // i = 1 because the first element is assumed to be sorted
  for (let i = 1; i < arr.length; i++) {
    // current element to be inserted
    let key = arr[i];
    // a pointer to the previous  element in the sorted part of the array
    let j = i - 1;
    //Sorted elements can be more than one. This is the logic to iterate over the sorted part of the array
    // also ensure all the elements greater than the number to insert are shifted to the right by 1
    // j >= 0 - make sure to iterate till the first element in the array
    // arr[j] > key - to check if the sorted element is greater than the element to be inserted
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // j points to the index where the condition failed
    // insert the number(key) to insert to the right of the smaller number
    arr[j + 1] = key;
  }
  return arr;
};
console.log(insertionSort(array));
// Big O is Quadratic time complexity because of the nested loops
// Big 0 = O(n^2)
// As the number of elemnts in  the array increases the number of comparisons increases by square of that number
const arr = [1, 4, 2, 8, 345, 23, 43, 32, 5443, 63, 123, 43, 2, 55, 1, 234, 92];
const insertionSrt = (arr) => {
  for (i = 1; i < arr.length; i++) {
    for (let j = 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSrt(arr));
