//Algorithm for a linear search

let arr = [];

const init = (x, max_size, range) => {

    for (let i = 0; i < max_size; i++) {

        x.push(Math.floor(Math.random() * range));
    }

    console.log(`Your array to be searched is: ${x}`);

    return x;
}

const search = (x, val) => {
    let found = false;
    let val_idx;

    //iterates through each index, checking for a match to the desired value
    for (let i = 0; i < x.length; i++) {
        if (x[i] === val) {
            
            //once found, the loop outputs the index of val and breaks the loop
            found = true;
            val_idx = x[i];
            
            console.log(`${val} found at index ${i + 1} out of ${x.length}`);

            return;
        } else {

            console.log(`${val} not found at index ${i + 1} out of ${x.length}, continuing...`);
        }

    }

}

init(arr, 8, 10);
search(arr, 5);