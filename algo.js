// array

const arrayMax = (arr, w) => {
  let i = 0;
  const newArr = [];
  
  while (i + w <= arr.length) {
    const possMaxArr = arr.slice(i, i + w);
    console.log(possMaxArr);
    newArr.push(Math.max(...possMaxArr));
    i += 1;
  } 
  return newArr;
}

console.log(arrayMax([1,2,3,4,5,6,7,8,9,10],3))

// solution in O(w) using deque;

const arrayMaxRefact = (arr, w) => {
  const result = [];
  if (arr.length === 0) return result;

  if (w > arr.length) return result;

  let window = [];

  for (let i = 0; i < w; i += 1) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
  }
  result.push(arr[window[0]]);

  for (let i = w; i < arr.length; i += 1) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]){
      window.pop();
    }
    window.push(i);
    result.push(arr[window[0]]);
  }
  return result;
}

console.log(arrayMaxRefact([1,2,3,4,5,6,7,8,9,10],3));

const binSearch = (arr, target) => {
  // arr has sorted and unsorted parts
  // q: how to look through unsorted
  // q: how to know which is unsorted
  const binSearchHelper = (arr, start=0, end = arr.length - 1, target) => {
    if (start > end) {
      return -1;
    }
    let mid = Math.floor(start + end)/2;

    if (arr[mid] === target) return mid;
    // target in sorted array and less than mid
    if (arr[start] <= arr[end] && target <= arr[mid] && target >= arr[start]) {
      return binSearchHelper(arr, start, mid - 1, target);
    } else if (arr[mid] <= arr[end] && target >= arr[mid] && target <= arr[end]){
      return binSearchHelper(arr, mid + 1, end, target);
    } else if (arr[end] <= arr[mid]) {
      return binSearchHelper(arr, mid + 1, end, target);
    } else if (arr[start] >= arr[mid]){
      return binSearchHelper(arr, start, mid - 1, target);
    }
    return - 1;
  }
  return binSearchHelper(arr, 0, arr.length - 1, target);
}

console.log(binSearch([6,7,1,2,3,4,5], 3));