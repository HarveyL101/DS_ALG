let pal = "winnipeg";
let pal2 = [];
pal = Array.from(pal);

const init = pal1 => {

    for(let i = 0; i < pal1.length; i++) {
        copy.unshift(pal1[i]);
    }
}

const palCheck = (pal1, )


console.log(pal);
console.log(pal2);

let isPal = true;

for(let i = 0; i < pal.length; i++) {
    if(pal[i] !== pal2[i]) {

        isPal = false;
        break;
    } 
}

if(isPal) {
    console.log(`${pal} is palindromic.`)
} else {
    console.log(`${pal} is NOT palindromic.`);
}



