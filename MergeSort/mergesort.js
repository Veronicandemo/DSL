// Problem Statement - Given an array of integers sort the array
// step 1 - dividing the array till the sub array lenght is 1 - best case for recursion
//////arr is the array to sort
function mergeSort(arr) {
  // handle when the array lenght is 1
  if (arr.length < 2) return arr;

  // step 2:Dividing the array - divide right at the middle
  const mid = Math.floor(arr.length / 2);

  //1. left arr = elements from the begining upto the middle but not including the middle element
  const leftArr = arr.slice(0, mid);

  //2.  right arr = elemnts from the middle element upto the last element
  const rightArr = arr.slice(mid);
  // 3. At this point the left and the right array may still contain more than one element , so repeat the steps for both the arrays
  //The arrays are the parsed into a merge function which will be part two of the algorithm
  return merge(mergeSort(leftArr), mergeSort(rightArr)); //dividing the array till they contain only one element
}
// part two of the algorithm
// Will receive the left and right arrays as parameters
function merge(leftArr, rightArr) {
  //  create a temporary arr to hold the sorted elements
  const sortedArr = [];
  //   Check that both arrays are not empty
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      // we use shift since the elemnt shpul also be removed from the left arr
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  //   merge the sorted array with whatever array still contains the elements
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));

// Big O - the first part is log(n) complexity part two the time complexity is linear because of the while loop
// Resulting time complexity =  O(nlogn)

// Leete Code #88
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
//  To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
//  and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge88(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    let firstVal = nums1[first];
    let secondVal = nums2[second];
    if (firstVal > secondVal) {
      nums1[i] = firstVal;
      i--;
      first--;
    } else {
      nums1[i] = secondVal;
      i--;
      second--;
    }
  }
}
console.log(merge88([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
