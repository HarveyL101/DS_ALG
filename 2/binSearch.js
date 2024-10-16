//algorithm for a binary search of a sorted array
//use 'ItBiSearch' for an iterative binary search
//use 'ReBiSearch' for a recursive binary search

const ItBiSearch = (arr, target, start, end) => {
    console.log("Unfinished!");
}

const ReBiSearch = (arr, target, start = 0, end = arr.length - 1) => {

    const mid = Math.floor((start + end) / 2);

    //returns false if the end is reached before finding the target
    if (start > end) {
        return -1;
    }
    
    //returns the value for mid if found
    if (arr[mid] === target) {
        return mid;
    }
    
    //recursive search for the target value
    if (arr[mid] < target) {
        return ReBiSearch(arr, target, mid + 1, end);
    } else {
        return ReBiSearch(arr, target, start, mid - 1);
    }
}   

let sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = Math.floor(Math.random() * 20);

const index = ReBiSearch(sortedArr, target);

if (index !== -1) {
    console.log(sortedArr);
    console.log(`target ${target} found at index ${index}`);
} else {
    console.log(sortedArr);
    console.log(`target ${target} not found`);
}
