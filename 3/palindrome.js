//function to check if a given string is palindromic (the same word back to front)

const isPalindromic = str => {
 
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar";
let str2 = "potato";
let str3 = "poop";

console.log(isPalindromic(str1));
console.log(isPalindromic(str2));
console.log(isPalindromic(str3));

