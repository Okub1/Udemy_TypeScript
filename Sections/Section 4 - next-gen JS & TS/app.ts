// const userName = 'Jacob';
// let age = 23;

// age = 24;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// difference between "var" and "let"
// if (age > 20) {
    // var isOld = true; // can be seen globally, as it is not inside function
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number) => a + b; // only available with one expression!

// const printOutput = (output: string | number) => console.log(output);
// const printOutput: (a: string | number) => void = output => console.log(output); // same as one above, we didn't save much here

// const button = document.querySelector('button');

// // another example of arrow functions
// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5, 2));


// const add = (a: number, b: number = 1) => a + b; // setting up default value, that allows us to call function with just one parameter

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies[0], hobbies[1]); // classic way

// spread operator ... tells to pull out all elements of hobbies array and push them into active hobbies
activeHobbies.push(...hobbies);

// also works on objects
const person = {
    firstName: 'Jacob',
    age: 23
};

// const copiedPerson = person; // classic way of refferencing to another variable

const copiedPerson = {...person}; // copies key-value pairs are pulled and added into another object making perfect copy


// rest parameters (spread operator in function parameters)
// used when you don't know how many numbers you can get
const add = (...numbers: number[]) => { // for desired count of parameters, you can use ...numbers: [number, number, number] for three parameters
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


// Array & Object destructuring

// classic way of array destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// pulling two hobbies into single variables, and remaining into new array of hobbies
const [hobby1, hobby2, ...remainingHobbies] = hobbies; // it is copying variables!

console.log(hobbies, hobby1, hobby2);

// object destructuring, there has to be property names of object inside of curly brackets {}
// also, there you can assign new name using colon: "field: allias"
const { firstName: userName, age } = person;

console.log(userName, age);