/*
Merge Sort: 
1. If input < 2, return input 
2. Merge Sort left half
3. Merge Sort right half
4. Merge sorted halves
*/
const mergeSort = (array) => {
  const size = array.length;
  if (size < 2) {
    return array;
  }
  const middle = Math.floor(size / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle, size);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

/* 
Helper function for merge sort that merges two arrays
*/
const merge = (left, right) => {
  let res = new Array(left.length + right.length).fill(0);
  let p = 0,
    q = 0,
    i = 0;
  while (p < left.length && q < right.length) {
    if (left[p] > right[q]) {
      res[i] = right[q];
      q++;
    } else {
      res[i] = left[p];
      p++;
    }
    i++;
  }
  while (p < left.length) {
    res[i] = left[p];
    p++;
    i++;
  }
  while (q < right.length) {
    res[i] = right[q];
    q++;
    i++;
  }
  return res;
};

console.log(mergeSort([5, 4, 1]));
