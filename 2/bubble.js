let arr = [];

const init = (x, max_size, range) => {

    for (let i = 0; i < max_size; i++) {

        x.push(Math.floor(Math.random() * range));
    }

    console.log(`Your unsorted array is: ${x}`);
    return x;
}

const sort = x => {

    let i, j, temp;

    for (i = 0; i < x.length - 1; i++) {

        for (j = i + 1; j < x.length; j++) {

            if (x[j] < x[i]) {

                temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }
}

init(arr, 10, 10);
sort(arr);

console.log(`Your array after bubble sorting is: ${arr}`);