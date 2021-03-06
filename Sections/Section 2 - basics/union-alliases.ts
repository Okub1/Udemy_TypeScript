type Combinable = number | string;          // type union alliases
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,                     // number | string, // union types
    input2: Combinable,                     // number | string, //
    resultConversion: ConversionDescriptor  //'as-number' | 'as-test' // union literals type
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);