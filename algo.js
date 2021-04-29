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

console.log(arrayMax([-4,2,-5,3,6,7,2], 3))