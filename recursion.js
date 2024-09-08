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

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
