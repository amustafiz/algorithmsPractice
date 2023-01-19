function LinkedList() {
    this.head = null
    this.tail = null
  }
  
  function Node(val) {
    this.value = val
    this.next = null
  }
  
  // adds node to end of list
  LinkedList.prototype.push = function (value) {
    // create new node
    const node = new Node(value)
    // is there a head?
    // no head => make node the head.
    if (this.head === null) {
      this.head = node
      this.tail = node
      return
    } else {
      // head =>
      // find the tail.
      const currentTail = this.tail
      // add node to the next pointer of tail
      currentTail.next = node
      // assign a new tail;
      this.tail = node
      return
    }
  }
  
  const myLinkedList = new LinkedList()
  console.log(myLinkedList)
  myLinkedList.push(9)
  myLinkedList.push(9)
  myLinkedList.push(9)
  myLinkedList.push(9)
  myLinkedList.push(9)
  myLinkedList.push(9)
  myLinkedList.push(9)
  
  const myLinkedList2 = new LinkedList()
  
  myLinkedList2.push(9)
  myLinkedList2.push(9)
  myLinkedList2.push(9)
  myLinkedList2.push(9)
  console.log(myLinkedList2)
  
  // function ListNode(val, next) {
  //   this.val = val === undefined ? 0 : val
  //   this.next = next === undefined ? null : next
  // }
  
  function sumLinkedListValues(l1, l2) {
    let currentNode1 = l1.head
    let currentNode2 = l2.head
    let ResultList = null
    let carry = false
    // let currentSum = currentNode1.value + currentNode2.value
    // console.log(currentSum)
    while (currentNode1 !== null || currentNode2 !== null || carry) {
      // sum l1 current node value and l2 current node value
      let sum1 = currentNode1 && currentNode1?.value ? currentNode1.value : 0
      let sum2 = currentNode2 && currentNode2?.value ? currentNode2.value : 0
      let currentSum = +carry + sum1 + sum2
      carry = false
      let nodeVal
      // if the currentSum is greater than 10
      if (currentSum >= 10) {
        currentSum = currentSum % 10
        carry = true
      }
      nodeVal = currentSum
      if (!ResultList) {
        ResultList = new LinkedList()
      }
      ResultList.push(nodeVal)
      currentNode1 = currentNode1?.next || null
      currentNode2 = currentNode2?.next || null
    }
    return ResultList
  }
  
  console.log(sumLinkedListValues(myLinkedList, myLinkedList2))

  const twoSumSimpler = (arr,target) => {
    for (let i = 0; i < arr.length; i += 1) {
      const first = arr[i]
      console.log(first)
      for (let j = 1; j < arr.length; j += 1) {
        const second = arr[j]
        const total = first + second
        if (total === target) {
          return [i, j]
        }
      }
    }
    return []
  }

  const twoSumAuxillary = (arr, target) => {
    let myMap = new Map()
    for (let i = 0; i < arr.length; i += 1) {
      if (myMap.has(arr[i])) {
        return [myMap.get(arr[i]), i]
      }
      myMap.set(target - arr[i], i)
    }
    return []
  }
  
  console.log(twoSumAuxillary([2, 7, 11, 15], 9))


  /*remove duplicates from sorted array in place with preserving relative order and leaving 
  space in the end for the eleements removed 
  example: [1,1,2,2,3] => [1,2,3,undefined,undefined]
  return the length of the array
  */
function removeDuplicates(arr) {
  let read = 0;
  // let write = arr.length - 1;
  let currentEvaluatedIndex = 1;
  let nextEvaluatedIdx = 2;
  let end = arr.length;
  let count = 0;

  while(read < end){
    if(arr[read] === arr[currentEvaluatedIndex] || arr[currentEvaluatedIndex] === undefined) {
      let nextEvaluatedValue = arr[nextEvaluatedIdx];
      arr[currentEvaluatedIndex++] = nextEvaluatedValue;
      arr[nextEvaluatedIdx++] = undefined;
      count += 1;
    }
    read += 1;
  }
  return arr
}

console.log(removeDuplicates([1,1,2,3,3,4]))




function miniMaxSum(arr) {
  // Write your code here
  let finalMaxSum = -Infinity;
  let finalMinSum = +Infinity;
  // loop through the array and for the current loop element,
  for (let i = 0; i < arr.length; i += 1) {
      let currentSum = arr.slice(0, i).reduce((acc,curr)=> acc += curr, 0);
  // loop through rest of the array and add all the elements up to current MaxSum.
      for (let j = i + 1; j < arr.length; j += 1) {
          currentSum += arr[j];
      }       
  // compare currentSum to finalMaxSum and finalMinSum and update (if needed) both
      if (finalMaxSum < currentSum) finalMaxSum = currentSum;
      if (currentSum < finalMinSum) finalMinSum = currentSum;
  }
  return [finalMinSum, finalMaxSum];
}
console.log(miniMaxSum([1,3,5,7,9]));
// console.log(miniMaxSum([140638725, 436257910, 953274816, 734065819, 362748590]));
// console.log(miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127]))
// console.log(miniMaxSum([426980153, 354802167, 142980735, 968217435, 734892650]))
// console.log(miniMaxSum([]))
// console.log(miniMaxSum([]))
// console.log(miniMaxSum([]))
// console.log(miniMaxSum([]))

const timeConversion = (s) => {
 const sArray = s.split(':');
 console.log(Number(sArray[0]) < 12)

 sArray[0] = sArray[2].includes('PM') 
  ? Number(sArray[0]) < 12 ? String(12 + Number(sArray[0]))  :'12' 
  : Number(sArray[0]) < 12 ? sArray[0]  :'00';

 sArray[2] = sArray[2]?.[0] + sArray[2]?.[1];
 return sArray.join(':')
}

console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'))
console.log(timeConversion('06:40:03AM'))

const findMedian = (arr) => {
  const sorted = arr.sort((a,b) => a - b);
  console.log(Math.floor(sorted.length/2))
  return sorted[(Math.floor(sorted.length/2))];
}

console.log(findMedian([5,3,1,2,4]));




function lonelyinteger(a) {
  // Write your code here
  const storeObj = {};
  for (const el of a) {
         storeObj[el] =  ++storeObj[el] || 1;  
  }
  for (const o in storeObj){
      if(storeObj[o] === 1) return o;
  }
}



function diagonalDifference(arr) {
  // extract the 'n' for the n * n diagonal.
  const n = arr[0].length;
  let j = 0;
  let k = n - 1;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  // use it to set up limits for one loop denoting rows
  for (let i = 0; i < n; i += 1) {
      // set a counter in a loop that also increments for columns
      const leftEl = arr[i][j++];
      leftDiagonalSum += leftEl;
      const rightEl = arr[i][k--];
      rightDiagonalSum += rightEl
  }
  return Math.abs(leftDiagonalSum - rightDiagonalSum)
}

console.log(diagonalDifference([
[11, 2, 4],
[4, 5, 6],
[10, 8, -12]]))

function countingSort(arr) {
  // create an array of length 100 prepopulated with 0;
  const result = Array.from({length:arr.length}, (v,i) => 0);

  for (let i = 0; i < arr.length; i += 1) {
   // find the element's value at i, use this value as the index in your result array to increment the value there for this iteration
   const resultIdx = arr[i];
   result[resultIdx]++;
  }
  // return the values
  console.log(result[2])
  return result;
}

console.log(countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33  ]))


function flippingMatrix(matrix) {
  const n = matrix.length/2;
  let grandTotal = 0;
  // break down into 2*2 matrix (smallest unit of 2*n matrix)
  // top left quadrant = matrix[r][c]
  // bottom left quadrant = matrix[(2*n) - 1 - r][c]
  // top right quadrant = matrix[r][(2*n) - 1 - c]
  // bottom right quadrant = matrix[(2*n) - 1 - r][(2*n) - 1 - c]

  for (let r = 0; r < n; r += 1) {
    for (let c = 0; c < n; c += 1) {
      const topLeft = matrix[r][c]
      const topRight = matrix[r][2*n - 1 - c]
      const bottomLeft = matrix[2*n - 1 - r][c]
      const bottomRight = matrix[2*n - 1 - r][2*n - 1 - c]
      console.log(Math.max(topLeft,topRight,bottomLeft,bottomRight))
      grandTotal += Math.max(topLeft,topRight,bottomLeft,bottomRight)
    }
  }
  return grandTotal;
}

console.log(flippingMatrix([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]])) 

function printSpiralMatrix (n) {
  const arr = Array.from({length:n},() => []);
  let row = 0;
  let col = 0;
  let counter = 1;
  let rowEnd = n - 1;
  let colEnd = n - 1;

  while (col <= colEnd && row <= rowEnd) {
      // Top row & middle value (Where col === colEnd && row === rowEnd)
    for (let i = col; i <= colEnd; i++) {
        arr[row][i] = counter;
        counter++;
    }
    row++;
    // end column
    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = counter++;
    }
    colEnd--;

    // end row
    for(let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = counter++;
    }
    rowEnd--;

    // first col from end
    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = counter++;
    }
    col++;
  }
  return arr;
}

console.log(printSpiralMatrix(4))

function flipMatrix(matrix){
  // find the four quadrant elements that give the highest sum among all combinations of four elements that make up a 2*2 matrix of a 2n*2n matrix and return their sum
  let n = matrix.length/2;
  let total = 0;

  for(let r = 0; r < n; r += 1) {
    for (let c = 0; c < n; c += 1) {

      const topLeftEl = matrix[r][c];
      const bottomLeftEl = matrix[2*n - r - 1][c];
      const topRightEl = matrix[r][2*n -c - 1];
      const bottomRightEl = matrix[2*n-r-1][2*n-c-1];
      // highest of each of the 4 elements would eventually be chosen and added to total;
      total += Math.max(topLeftEl,topRightEl, bottomLeftEl, bottomRightEl);
    }
  }
  return total;
}
console.log(flipMatrix([[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]])) 


function matrixSpiralPrint(n) {
  // declare pointers to track start, end and a counter
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let spiralMatrix = Array.from({length:n},() => []);
  console.log(spiralMatrix)
  // while startRow <= endRow && starCol <= endCol 
  while(startRow <= endRow && startCol <= endCol) {
  // draw first value and the last middle value (check)
    for(let i = startCol; i <= endCol; i += 1) {
      spiralMatrix[startRow][i] = counter++;
    }
    startRow++;

  // draw right col
    for(let i = startRow; i <= endRow; i += 1) {
      spiralMatrix[i][endCol] = counter++;
    }
    endCol--;

  // draw middle and end row
  for(let i = endCol; i >= startCol; i -= 1) {
    spiralMatrix[endRow][i] = counter++;
  }    
  endRow--;
  // draw left col
  for(let i = endRow ; i >= startRow; i -= 1) {
    spiralMatrix[i][startCol] = counter++;
  }
  startCol++;
  }
  return spiralMatrix
}

console.log(matrixSpiralPrint(3))


const towerBreakers = (n,m) => {
  // n = number of towers m = height of tower
  // if m === 1 p2 wins as p1 is not able to make a move regardless of the number of towers
  // if n === 1 p1 always wins as he is able to reduce it to size of 1 (m is divisible by 1)
  // if n === odd p2 always loses
  // if n === even p1 always loses
// create array
  if (m === 1 || n % 2 === 0) {
    return 2
  } else {
    return 1
  }
// player 1

// player 2 
}
console.log(towerBreakers(2,6))

const caesarCipher = (s, k) => {
  // s = string, k = integer of how many letters to rotate alphabet by;

  // creater cipher dict using k and an alphabet string with its index

  const alphString = 'abcdefghijklmnopqrstuvwxyz';
  let idx;
  const cipherObj = alphString.split('').reduce((acc, el, i) => {
    // acc[el] = k > 25  ? i + (k % 26) : i + k;
    // if  k > 25, we check if i + (k %26) > 25 => If it is we 
    
    // create a cipher with values of the new letter
    if (k > 25) {
      if(idx) {
        idx += 1;
        return;
      }
      idx = i + (k % 26);
      if (idx > 25) {
        idx = 0;
      }
    } else {
      idx = i + k;
    }
    acc[el] = alphString[idx]
    return acc;
  },{})
  console.log(cipherObj['r'])
  // let encryptedString = '';
  // console.log(alphString[cipherObj['']])
  // for (let i = 0; i < s.length; i += 1) {
  //       s[i].match(/[a-z]/gi) 
  //         ? s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 172
  //           ? encryptedString += alphString[cipherObj[s[i].toLowerCase()]]
  //           : encryptedString += (alphString[cipherObj[s[i].toLowerCase()]]).toUpperCase()
  //         : encryptedString += s[[i]];
  // }
  return encryptedString;
}

// console.log(caesarCipher('www.abc.xy',87));


function caesarCipherOptimized(s, k) {
  return s.replace(/[a-z]/gi, m => {
    console.log(m);
    const c = m < "a" ? 65 : 97;
    console.log(c);
    return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
  });
}console.log(caesarCipherOptimized('www.abc.xy',87))

const generateParens=(n) => {
  // create a result array
  // invoke a helper function
  // return a result array

  const result = [];
  generateHelper('',0,0);
  return result;
  function generateHelper(str,left,right){
    // Check if left tracker is equal to n and the right tracker is equal to n.
    // If it is push str to results
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    // if the left is less than n
    if (left < n) {
      generateHelper(str + '(', left + 1, right)
    }
    if (left > right) {
      generateHelper(str + ')', left, right + 1);
    }
  }

}

console.log(generateParens(2))

const balancedParens = (str) => {
 let seen = false;
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      seen = true;
      sum += 1;
    }
    else if (seen && str[i] === ')') {
      sum -= 1;
      seen = false;
    }
  }
  return sum === 0;
}

console.log(balancedParens('(')) //false
console.log(balancedParens('()')) //true
console.log(balancedParens(')(')) // false
console.log(balancedParens('(())')) // true