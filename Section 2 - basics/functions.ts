function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // callback function type definition
    const result = n1 + n2;
    cb(result); // function callback
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // Function type specifying, that it takes 2 parameters of type number and returns number

combineValues = add; // pointer to a function
// combineValues = printResult; // Error, expected func. with two number parameters
// combineValues = 5; // Error, not a function

console.log(combineValues(8, 8));

// let someValue: undefined // we can have undefined variables

addAndHandle(10, 20, (result) => { // callback expects just one parameter of type number
    console.log(result); // body of annonymous function provided as parameter of addAndHandle function
});