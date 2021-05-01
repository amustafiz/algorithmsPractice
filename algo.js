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

let helper = (arr, key, start, end) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end)/2);
  let middleNum = arr[mid];
  let startNum = arr[start];
  let endNum = arr[end];
  if (key === middleNum) return mid;
  if (key <= middleNum &&  key >= startNum && startNum<= middleNum) {
    return helper(arr, key,start, mid - 1);
  } else if (key >= middleNum &&  key <= endNum && middleNum <= endNum) {
    return helper(arr, key, mid + 1, end);
  } else if (endNum <= middleNum) {
    return helper(arr, key, mid + 1, end);
  } else if (startNum >= middleNum) {
    return helper (arr, key, start, mid - 1);
  }
  return -1;
};

const binarySearchRotated =   function(arr, key){
  return helper(arr, key, 0, arr.length - 1);
}

const v1 = [6, 7, 1, 2, 3, 4, 5];
const v2 = [4, 5, 6, 1, 2, 3];
console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
console.log("Key(6) found at: " + binarySearchRotated(v2, 6));


function findSmallestCommon(a, b, c) {
  let i = 0; 
  let j = 0;
  let k = 0;
  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) return a[i];
    if (a[i] <= b[j] && a[i] <= c[k]) i +=1;
    else if (b[j] <= a[i] && b[j] <= c[k]) j += 1;
    else if (c[k] <= a[i] && c[k] <= b[j]) k += 1;
  }
}
let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [1, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];
console.log(findSmallestCommon(v1,v2,v3));


const rotationArray = (arr, n) => {
  // if n < 0, splice n arr el from front, add to back
  // if n > 0, splice n arr el from back, add to front
  if (n === 0) return arr;
  if (n < 0) {
   const toInsert = arr.splice(0,Math.abs(n));
   arr.push(...toInsert);
   return arr;
  }
   else{
    const toInsert = arr.splice(arr.length - n, n);
    arr.unshift(...toInsert);
    return arr;
   }
}
// const arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
// console.log(rotationArray(arr, -2))
// console.log(rotationArray(arr, 2));

//[ 20, 0, 59, 86, 32, 11, 9, 40, 1, 10 ]



const findLowIndex = (arr, target) => {
  const helper = (arr, target, low, high) =>{
    let mid = Math.floor((low + high)/2);
    if (low === arr.length - 1) return - 1;
    if (low > high) return low;
    if (target  > arr[mid]) low = mid + 1;
    else if (target <= arr[mid]) high = mid - 1;
    return helper(arr, target, low, high);
  }
  return helper(arr, target, 0, arr.length - 1);
}


const findLowIndexRefact = (arr, key) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((low + high)/2);

  while (low <= high) {
    if (key > arr[mid]) low = mid + 1;
    else if (key <= arr[mid]){
      high = mid - 1;
    }
    mid = Math.floor((low + high)/2);
  }
    if (low < arr.length && arr[low] === key) {
      return low;
    }
    return -1;
  
}
const arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4,5, 5, 5,6, 6, 6, 6, 6, 6];

console.log(findLowIndexRefact( arr, 5));
