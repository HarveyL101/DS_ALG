/* Question 5. Design an algorithm to continuously remove adjacent duplicate letters from 
a string until no adjacent duplicates remain, using a Stack or a Queue. Can you also implement 
this using the alternative ADT?
(Example: Convert “abbccd” to “ad”, “dsallasg” to “dg”, and “abccbadd” toanempty string.) */


let x = 0;
let y = 1;

let str = "abbccd";

let arr = str.split("");

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++)
    if (arr[i] === arr[j]) {
        arr.pop[i];
        console.log(arr);
    }
}

console.log(arr);