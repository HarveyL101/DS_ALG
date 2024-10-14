//algorithm for calculating the nth sequence of the fibonacci sequence
// F(n) = F(n-1) + F(n-2)

let arr = [];
arr[0] = 0;
arr[1] = 1;

const n = 8;

const fib1 = n => {

    for (let i = 2; i <= n; i++) {

        arr[i] = arr[i - 1] + arr[i - 2];
        console.log(`${arr[i]}`);
    }

    return arr[n];
}

fib1(n);
