//Algorithm for a linear search

const arr = [];

const init = (x, max_size, range) => {

    for (let i = 0; i < max_size; i++) {

        x.push(Math.floor(Math.random(range)));
    }

    console.log(`Your array to be searched is: ${x}`);
}

const search = (x, val) => {

    for (let i = 0; i < x.length; i++) {
        if (x[i] === val) {
            
            console.log(`Your desired value '${val}' is present at index ${x[i]}`);

            break;
        }

        console.log(`${val} not found at index ${x[i]}, continuing...`);
    }
}

init(arr, 10, 20);
search(arr, 15);