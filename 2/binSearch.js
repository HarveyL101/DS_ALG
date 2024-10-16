//algorithm for a binary search of a sorted array

//currently broken, hate binary search

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {


    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}   

let sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 18;

const index = binarySearch(sortedArr, target);

if (index !== -1) {
    console.log(sortedArr);
    console.log(`Element found at index ${index}`);
} else {
    console.log(sortedArr);
    console.log("Element not found");
}
