const _ = {
  // .clamp() clamps passed num to between the specified outer bounds
  clamp(num, lower, upper) {
    num = Math.max(num, lower);
    return Math.min(num, upper);
  },

  // .inRange() returns true/false if num is within specified bounds
  // optional parameter: end, with default value of 0
  inRange(num, start, end = 0) {
    // switch start and end if start > end, incl with default end value of 0
    if (start > end) [start, end] = [end, start];
    return num >= start && num < end;
  },

  // .words() splits a string by its words and returns array of those words
  // optional parameter: pattern, with default of alphanumeric characters and ' _ -
  words(string, pattern = /[\w'-]+/gi) {
    return string.match(pattern);
  },

  // .pad() pads a string to a defined length using
  // optional parameter: pattern, with default value of " "
  pad(str, leng, pattern = " ") {
    // returns string if already acceptable length
    if (str.length >= leng) return str;

    // padding: number of characters required to meet length
    let padding = leng - str.length;
    // extra: if odd number, will add 1 character on end
    let extra = padding % 2;
    // answer is array of string characters
    let answer = str.split("");

    // while answer.length < leng - 1, accounts for odd and even length.
    for (let i = 0; answer.length < leng - 1; i++) {
      // split pattern into array of characters, then ... spread them into answer
      answer.unshift(...pattern.split(""));
      answer.push(...pattern.split(""));
    }

    // if extra is truthy, push first character of pattern to answer
    if (extra) answer.push(pattern[0]);

    // return answer array as string
    return answer.join("");
  },

  // .has() checks if an object has a specified key
  has(object, key) {
    // if key does not exist, undefined will be converted to false, else true
    return Boolean(object[key]);
  },

  // .invert() creates an object composed of the inverted keys and values of passed object.
  // If object contains duplicate values, subsequent values overwrite property assignments of previous values.
  invert(object) {
    // set empty object to build answer in
    let answer = {};

    // iterate over object with for in loop, assigning the value of object[key] as a new key in answer, with a matching value of the current key.
    for (let key in object) {
      answer[object[key]] = key;
    }

    return answer;
  },

  // .findKey() returns first key in object which satisfies given function
  findKey(object, func) {
    // iterate over object with for in loop and run function on the value. If truthy, return the key holding that value
    for (let key in object) {
      if (func(object[key])) return key;
    }

    // if no key is truthy, return undefined
    return undefined;
  },

  // .drop() creates a slice of array with n elements dropped from the beginning
  // optional parameter: n with default value of 1
  drop(arr, n = 1) {
    return arr.slice(n);
  },

  // .dropWhile() creates a slice of array with elements dropped from beginning until first falsy element is found, as defined by given function
  dropWhile(arr, func) {
    // define index from which to start slice
    let i = 0;

    // run function on each element in array until falsy, increasing i
    while (func(arr[i])) {
      i++;
    }

    // return slice starting from located index
    return arr.slice(i);
  },

  // .chunk() creates an array of elements split into groups the length of size.
  // If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(arr, size) {
    // empty array for building answer
    let answer = [];

    // while arr can create chunks of length 'size', destructively chop them off the start and push to answer
    while (arr.length >= size) {
      answer.push(arr.splice(0, size));
    }

    // if there are any spare elements (fewer than size) push to answer as final chunk, otherwise ignore empty arr
    if (arr.length) answer.push(arr);

    // return array of chunks
    return answer;
  },
};

// Do not write or modify code below this line.
module.exports = _;
