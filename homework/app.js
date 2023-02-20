import { sortAndFilter,merge } from "./arrayUtils.js";
import {palindromes} from './stringUtils.js';

let people = [
  { name: "Ryan", age: "22", location: "Hoboken", role: "Student" },
  { name: "Matt", age: "21", location: "New York", role: "Student" },
  { name: "Matt", age: "25", location: "New Jersey", role: "Student" },
  { name: "Greg", age: "22", location: "New York", role: "Student" },
  { name: "Mike", age: "21", location: "Chicago", role: "Teacher" },
];

// console.log(sortAndFilter(['location', 'asc'], ['name', 'asc'], 'age', '22'));
/* output:
Error: the array does not exist
*/

console.log(palindromes(["Madam", "Loot", "Was it a cat I saw?", "Poor Dan is in a droop", "Anna", "Nope" ]))
// Each array element in the array consists of at least one alphanumeric character (No strings
//consisting of only non-alphanumeric characters)