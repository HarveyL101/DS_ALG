//implement a merge sort 

let arr = [];

const init = (arr, max_size, range) => {

    for (let i = 0; i < max_size; i++) {
        arr.push(Math.floor(Math.random() * range));
    }

    console.log(`Your unsorted array is ${arr}`);

    return arr;
}

const merge = (arr, left, mid, right) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    //create temp arrays
    const L = new Array(n1);
    const R = new Array (n2);

    //copy data to temp arrays


    //merge the temp arrays back into one arr


    //copy remaining elements of right side, if there are any

}


