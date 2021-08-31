
// type restrictions using type constrains "a extends b"
// T has to be object => "T extends object"
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// now we are forced to pass an object, not just number/string/boolean
// const mergedObj = merge({name: 'Jacob'}, 23); // error
// console.log(mergedObj.age); // error, because there is no age field

const mergedObj = merge({ name: 'Jacob' }, { age: 23 });
console.log(mergedObj.age);