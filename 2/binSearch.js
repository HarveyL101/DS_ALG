//algorithm for a binary search of a sorted array

//currently broken, hate binary search
const binarySearch = (arr, key) => {

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (high >= low) {

        mid = low + Math.floor((high - low) / 2);

        if (arr[mid] == key) {

            return mid;
        }

        if (arr[mid] > key) {

            high = mid - 1;
            console.log(arr);
            console.log(`${low}, ${mid}, ${high}`);
        } else {

            low = mid - 1;
            console.log(arr);
            console.log(`${low}, ${mid}, ${high}`);
        }
  
        console.log("Not found");
    }

    return -1;
}

let arr = new Array(2, 3, 4, 10, 40);
let key = 10;

result = binarySearch(arr, key);

if (result == -1) {
    console.log("Element is not present in array");
} else {
    console.log(`Element is present at index ${result}`);
}


