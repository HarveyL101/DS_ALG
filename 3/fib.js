//algorithm for calculating the nth sequence of the fibonacci sequence
// F(n) = F(n-1) + F(n-2)

let arr = [];
arr[0] = 0;
arr[1] = 1;

//change n to search for a specific nth term
const n = 8;

const fib1 = n => {

    let x;
    for (let i = 2; i <= n; i++) {

        arr[i] = arr[i - 1] + arr[i - 2];
        console.log(`${arr[i]}`);
    }

    console.log(`The ${n}th value of the fibonacci sequence is: ${arr[arr.length - 1]}.`);

    return;
}

fib1(n);
