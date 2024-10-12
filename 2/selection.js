let arr = [];

const init = (array, max_size, range) => {

    //fills array to its max capacity with any whole numbers within range (e.g. 20)
    for (let i=0; i < max_size; i++) {

        array.push(Math.floor(Math.random() * range));
    }

    console.log(`The size of the random array is ${array.length}`);
    console.log(`Before sorting, the array is ordered by: ${array}`);

    return this.items;
}

const sort = array => {
    if (array.length < 2) {

        //standard error message
        console.log("Cannot sort an empty array, please use the 'init()' function first.");
        return;

    } else {

        const n = array.length;

        for (let i = 0; i < n - 1; i++) {

            let min_index = i;

            for (let j = i + 1; j < n; j++) {
                
                //find smallest index within unsorted part of array
                if (array[j] < array[min_index]) {
                    
                    //updates smallest index if a smaller element is found
                    min_index = j;

                }
            }

            //smallest is found, now to swap values of current index and minimum
            let temp = array[i];
            array[i] = array[min_index];
            array[min_index] = temp;
        }

        return array;
    }
}




init(arr, 20, 30);
sort(arr);

console.log(`The array in it's sorted format is: ${arr}`);