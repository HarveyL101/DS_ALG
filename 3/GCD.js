//recursive algorithm for finding the greatest common divisor (GCD)
//of two positive integers.

const GCD = (a, b) => {


    let smaller = Math.min(a, b);
    let larger = Math.max(a, b);
    let gcd = 1;

    //ensures both values are positive
    smaller = Math.floor(Math.abs(smaller));
    larger = Math.floor(Math.abs(larger));

    //if values are equal, the GCD is that value
    if (a === b) {
        console.log(`The GCD of ${a} and ${b} is ${a}.`);

        return;
    }

    for (let i = 1; i < smaller; i++) {

        while (a % i === 0 && b % i === 0) {

            gcd = i;

            i++
        }
    }
    console.log(`The GCD of ${a} and ${b} is ${gcd}`);

    return;
}

let num = Math.floor(Math.random() * 50);
let num2 = Math.floor(Math.random() * 50);

GCD(num, num2);
