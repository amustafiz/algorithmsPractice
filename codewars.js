/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const findShort = (s) => {
  // define a minLength and set it to string length
  let minLength = s.length;
  let wordLength = 0;
  // iterate through entire string
  for (let i = 0; i <= s.length; i += 1) {
    const char = s[i];
    // when word ends or sentence is done we compare
    if (char === " " || i === s.length) {
      if (wordLength < minLength) minLength = wordLength;
      wordLength = -1;
    }
    wordLength += 1;
  }
  return minLength;
};

console.log(findShort("bitcoin take"));
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
  // code away
  return `${name.split(" ")[0][0]}.${name.split(" ")[1][0]}`.toUpperCase();
}

console.log(abbrevName("Sam Harris")); //S.H
console.log(abbrevName("patrick Feenan")); //P.F
console.log(abbrevName("Evan cole"));

function duplicateEncode(word) {
  /*
  convert string to new string where each character in newString is '(' if that character
  appears only once in original string or ')' if character appears more than once
  */

  const lowerCased = word.toLowerCase();
  let encodeString = "";
  const countObj = {};
  // ...
  for (let i = 0; i < lowerCased.length; i += 1) {
    const letter = lowerCased[i];
    if (countObj[letter]) {
      countObj[letter] = countObj[letter] += 1;
    } else {
      countObj[letter] = 1;
    }
  }
  for (const letter of lowerCased) {
    if (countObj[letter] > 1) encodeString += ")";
    else if (countObj[letter] === 1) {
      encodeString += "(";
    }
  }
  return encodeString;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

function duplicateEncodeRefact(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

console.log(duplicateEncodeRefact("din"));
console.log(duplicateEncodeRefact("recede"));
console.log(duplicateEncodeRefact("Success"));
console.log(duplicateEncodeRefact("(( @"));

function digPow(n, p) {
  /*
  sum of all digits of n taken to successive powers of p = k*n
  */
  let digitsArray = String(n).split("");
  let power = p;
  const sum = digitsArray.reduce((acc, curr) => {
    acc += curr ** power;
    power += 1;
    return acc;
  }, 0);
  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));

function digPowRefact(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

function isPangram(string) {
  //...
  const stringArray = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  const alphObj = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
  };

  for (const string in alphObj) {
    if (stringArray.indexOf(string) === -1) return false;
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));

function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);

const uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const uniquelyOrdered = [];

  for (let i = 0; i < iterable.length; i += 1) {
    const lastElement = uniquelyOrdered[uniquelyOrdered.length - 1];
    console.log(lastElement);
    if (!(iterable[i] === lastElement)) uniquelyOrdered.push(iterable[i]);
  }
  return uniquelyOrdered;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log();

const plusOne = function (digits) {
  let number = Number(digits.join(""));
  console.log(number);
  let nextDigit = (number += 1);
  console.log(nextDigit);
  return [Number(...nextDigit.toString().split(","))];
};
console.log(plusOne([1, 2, 3]));

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const sLetters = {};
  for (const l of s) {
    if (sLetters[l]) {
      sLetters[l] += 1;
    } else {
      sLetters[l] = 1;
    }
  }
  const tLetters = {};
  for (const l of t) {
    if (tLetters[l]) {
      tLetters[l] += 1;
    } else {
      tLetters[l] = 1;
    }
  }

  for (const l in sLetters) {
    if (!(tLetters[l] !== undefined && tLetters[l] === sLetters[l]))
      return false;
  }
  return true;
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));

const groupAnagram = (strs) => {
  const output = [[strs?.[0]]];
  // const isGrouped = { [strs[0]]: true };
  for (let i = 0; i < strs.length - 1; i += 1) {
    // check all strings from that i to the end
    // assing strs[i] to current string
    const currentString = strs[i];
    // if currentString has already been seen skip to next index.

    let j = i + 1;
    while (j < strs.length) {
      // determine all other strings that are anagrams of current string
      const jthString = strs[j];
      console.log(jthString);

      // check if anagram with i'th string
      // isGrouped[currentString] = true;
      if (isAnagram(currentString, jthString)) {
        console.log(output.find((el) => el.includes(currentString)));
        output.find((el) => el.includes(currentString)).push(jthString);
        // isGrouped[currentString] = true;
      } else {
        console.log(jthString);
        output.push([jthString]);
        // isGrouped[jthString] = true;
      }
      j += 1;
    }
    // if there are no anagrams for that string, push and new []
    // if there are anagrams, push to the last output array element until none
  }

  return output;
};
console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

function bitwiseAND(n1, n2) {
  return n1.toString(2) | n2.toString(2);
}

console.log(bitwiseXOR(7, 12));
