let arr = [];

const init = (x, max_size, range) => {

    for (let i = 0; i < max_size; i++) {

        x.push(Math.floor(Math.random() * range));

    }

    console.log(`Your unsorted array is: ${x}, and its size is ${max_size}`);

    return x;
}

const sort = x => {

    if (x.length <= 1) {

        console.log("Cannot sort an empty array");

        return;
    }
    for (let i = 1; i < x.length; i++) {

        let current = x[i];
        j = i;

        while (j > 0 && current < x[j - 1]) {
            x[j] = x[j - 1];
            j -= 1;
        }
    }

    return x;
}

init(arr, 20, 20);
sort(arr);

console.log(`After the insertion sort, the array is: ${arr}`);