import { throwError } from "./helper.js";

export const palindromes = (strings) => {
  if (!strings) {
    throwError("no argument passed");
    return;
  }

  if (!Array.isArray(strings)) {
    throwError("argument is not an array");
    return;
  }

  if (strings.length === 0) {
    throwError("array is empty");
    return;
  }

  if (strings.every((str) => typeof str !== "string" || str == " ")) {
    throwError("array contains non-string values, or empty string");
    return;
  }

  // if (strings.every((str) => str.match("^[a-zA-Z0-9]*$") === null)) {
  //   throwError("array contains strings that are not alphanumeric");
  //   return;
  // }

  let result = {};
  for (let i = 0; i < strings.length; i++) {
    let str = strings[i]
      .toLowerCase()
      .replaceAll(" ", "")
      .replaceAll(/[^a-zA-Z ]/g, "");
    if (str.length > 1) {
      let strReverse = str.split("").reverse().join("");
      result[str] = str == strReverse;
    }
  }
  return result;
};

export const censorWords = (string, badWords) => {
  /* 
    Given an input string and an array of strings to be censored, return the input string while replacing each
word that is present in the input string and in the bad words list with special characters (each bad word
should maintain its original length). How it works is like so: you will use !, @, $, # in that particular order
and replace each character in each bad word with these starting with !. For example if the bad word is
“pineapple”, the censored word would be “!@$#!@$#!”. For every bad word encountered, the pattern
resumes from where it last left off, so after encountering “pineapple” and we later encounter “pretzel” as
the next bad word in the input string, we will censor it as “@$#!@$#”. Also, you must censor any strings
in the bad words list that appear as substrings in the input string
  */

  let newStr;

  badWords.map((word) => {
    let operationString;
    if (!newStr) {
      operationString = string;
    } else {
      operationString = newStr;
    }
    let stringArr = operationString.split(" ");
    let indexOfWord = operationString.indexOf(word);
    if (indexOfWord !== -1) {
      stringArr[indexOfWord] = "!@$#@";
    }
    newStr = stringArr.join(" ");
  });
};
