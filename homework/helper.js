export const sortOn = function (array, key, order) {
  array.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });

  if (order == "desc") {
    array.reverse();
  }

  return array;
};

export const throwError = (key) => {
  throw new Error(key);
};

export const allSameKeys = function (array) {
  let keys = Object.keys(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (Object.keys(array[i]).length !== keys.length) {
      return false;
    }
    for (let j = 0; j < keys.length; j++) {
      if (!array[i].hasOwnProperty(keys[j])) {
        return false;
      }
    }
  }
  return true;
};

export const allValuesStrings = function (array) {
  let keys = Object.keys(array[0]);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (
        typeof array[i][keys[j]] !== "string" ||
        array[i][keys[j]].trim() === ""
      ) {
        return false;
      }
    }
  }
  return true;
};

export const generateABadWordPlaceHolder = function (word) {
  let badWord = "";
  for (let i = 0; i < word.length; i++) {
    if (Math.random() > 0.5) {
      badWord += word[i].toUpperCase();
    } else {
      badWord += word[i].toLowerCase();
    }
  }
  return badWord;
};












// scirpt

let string = "I like bread that has chocolate chips in it but I do not like lollipops"
let badWords  = ["bread","chocolate","pop"]
 
let newStr

const generateABadWordPlaceHolder = function (word) {

  let badWord = "";
  for (let i = 0; i < wordArray.length; i++) {
    badWord = badWord + '2'
  }
  return badWord;
};


badWords.map((word)=>{
    let operationString
    if(!newStr){
        operationString = string
    }else{
        operationString = newStr
    }
    let stringArr = operationString.split(" ")
    let indexOfWord = operationString.indexOf(word)
    if(indexOfWord !== -1){
        operationString[indexOfWord] = '2'
    }
    newStr = stringArr.join(" ")
})

console.log(newStr)