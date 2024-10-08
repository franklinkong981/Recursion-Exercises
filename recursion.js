/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let firstLength = words[0].length;
  if (words.length == 1) {
    return firstLength;
  }

  let longestOfRest = longest(words.slice(1));
  if (firstLength > longestOfRest) {
    return firstLength;
  } else {
    return longestOfRest;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length == 0) {
    return ""
  } else if (str.length == 1 || str.length == 2) {
    return str[0];
  } else {
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) {
    return true;
  }

  if (str[0] == str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length == 0) {
    return -1;
  } else if (arr[0] == val) {
    return 0;
  } else {
    let findIndexOfRest = findIndex(arr.slice(1), val);
    if (findIndexOfRest > -1) {
      return findIndexOfRest + 1;
    }
    else {
      return -1;
    }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 0) {
    return "";
  }

  let lastCharacter = str[str.length - 1];
  return lastCharacter + revString(str.slice(0,-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsList = [];
  for (let key in obj) {
    if (typeof(obj[key]) == "string") {
      stringsList.push(obj[key]);
    } else if (typeof(obj[key]) == "object") {
      stringsList.push(...gatherStrings(obj[key]));
    }
  }
  return stringsList;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let middle = left + Math.floor((right - left) / 2);
  if (arr[middle] == val) {
    return middle;
  }
  else if (arr[middle] < val) {
    return binarySearch(arr, val, middle + 1, right);
  }
  else { //arr[middle] > val
    return binarySearch(arr, val, 0, middle - 1);
  }
}

function replicate(times, number) {
  if (times <= 0) {
    return [];
  }
  else {
    return [number, ...replicate(times-1, number)];
    //return [number].concat(replicate(times - 1, number));
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  replicate
};
