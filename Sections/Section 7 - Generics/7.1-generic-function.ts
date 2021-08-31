function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// types are infered from provided objects, so we do not need to
// specify what generic types are accepted:
// merge<{name: string}, {age: number}>(...)
const mergedObj = merge({name: 'Jacob'}, {age: 23});
console.log(mergedObj.age);