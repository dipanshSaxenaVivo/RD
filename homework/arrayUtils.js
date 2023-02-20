import { allSameKeys, allValuesStrings, sortOn, throwError } from "./helper.js";

export const sortAndFilter = (
  array = [{}, {}],
  arr1 = [sortByField1, order1],
  arr2 = [sortByField2, order2],
  filterBy,
  filterByTerm
) => {
  debugger;

  if (!array) {
    throwError("The array does not exist");
    return;
  }

  if (!Array.isArray(array)) {
    throwError("first argument should be an array");
    return;
  }

  if (!array.length) {
    throwError("array is empty");
    return;
  }

  if (!(array.every((item) => typeof item == "object") && array.length >= 2)) {
    throwError(
      "every element in array should be an object, at least 2 objects should be passed"
    );
    return;
  }

  if (array.every((item) => Object.keys(item).length === 0)) {
    throwError("Object inside array should not be empty");
  }

  if (!allSameKeys(array)) {
    throwError("all object in array should have same keys");
  }

  if (!allValuesStrings(array)) {
    throwError("values in object should be strings and not just empty strings");
  }

  if (!arr1) {
    throwError("seconds argument not passed");
    return;
  }

  if (!arr1.length) {
    throwError("seconds argument should not be empty");
    return;
  }

  if (arr1.length !== 2) {
    throwError("seconds argument should have only 2 elements");
    return;
  }

  if (!arr1.every((item) => typeof item == "string" && item.trim() !== "")) {
    throwError(
      "values in seconds argument should be strings and not just empty strings"
    );
    return;
  }

  let sortByField1 = arr1[0];

  if (!Object.keys(array[0]).includes(sortByField1)) {
    throwError("the sortByField1 is not a key in each object of the array");
    return;
  }

  let order1 = arr1[1];

  if (!(order1 === "asc" || order1 === "desc")) {
    throwError("the order of sortByField1 must be either 'asc' or 'desc'");
    return;
  }

  if (!arr2) {
    throwError("third argument not passed");
    return;
  }

  if (!arr2.length) {
    throwError("third argument should not be empty");
    return;
  }

  if (arr2.length !== 2) {
    throwError("third argument should have only 2 elements");
    return;
  }

  if (!arr2.every((item) => typeof item == "string" && item.trim() !== "")) {
    throwError(
      "values in third argument should be strings and not just empty strings"
    );
    return;
  }

  let sortByField2 = arr2[0];
  if (!Object.keys(array[0]).includes(sortByField2)) {
    throwError(
      "the key in the third argument should be a key in the array of objects"
    );

    return;
  }

  let order2 = arr2[1];
  if (!(order2 === "asc" || order2 === "desc")) {
    throwError("the value in the third argument should be asc or desc");
    return;
  }

  if (!Object.keys(array[0]).includes(filterBy)) {
    throwError("the filterBy key is not a key in each object of the array");
    return;
  }

  if (!(typeof filterByTerm == "string" && filterByTerm.trim() !== "")) {
    throwError("the filterByTerm must be a string and not just empty spaces");
    return;
  }

  let filteredArray = array.filter(
    (item) =>
      item[filterBy] === filterByTerm &&
      typeof item[filterBy] == "string" &&
      item[filterBy].trim !== ""
  );
  if (!filteredArray.length) {
    throwError(
      "there should be at least one object that has the value in the fourth argument"
    );
    return;
  }

  sortOn(array, arr2[0], arr2[1]);
  sortOn(array, arr1[0], arr1[1]);

  let arr = array.filter((obj) => obj[filterBy] === filterByTerm);

  return arr;
};

export const merge = (...args) => {
  if (!args) {
    throwError("no argument passed");
    return;
  } else if (!args.every((array) => Array.isArray(array))) {
    throwError("All arguments should be array");
    return;
  } else if (args.length < 1) {
    throwError("at least one array should be passed as an argument");
    return;
  } else if (args.every((array) => array.length === 0)) {
    throwError("arrays should not be empty");
    return;
  } else if (
    !args.every((array) =>
      array.every(
        (item) => typeof item === "string" || typeof item === "number"
      )
    )
  ) {
    throwError("all items in the array should be string or number");
    return;
  }

  let mergedArray = [];

  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      mergedArray;
      mergedArray = mergedArray
        .concat(args[i].flat(Infinity))
        .sort()
        .map((item) => {
          return typeof item === "string" ? item.trim() : item;
        });
    } else {
      mergedArray.push(args[i]);
    }
  }

  mergedArray.sort((a, b) => {
    if (typeof a === "string" && typeof b === "string") {
      return a - b;
    } else if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return 0;
    }
  });

  const result = mergedArray
    .filter(function (item) {
      return typeof item === "number";
    })
    .concat(
      mergedArray.filter(function (item) {
        return typeof item === "string";
      })
    );

  return result;
};