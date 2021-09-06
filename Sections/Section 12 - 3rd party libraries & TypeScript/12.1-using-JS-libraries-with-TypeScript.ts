import _ from 'lodash';
// as lodash is written in JS, we would need to import 
// types with lodash using "npm install --save @types/lodash" 
// OR "npm install --save-dev @types/lodash"
// after installing types to lodash, we can use it 
// normally without errors, with types from TypeScript

// ALSO, there exists @types for every popular 3rd party library
// i.e. JQuery: @types/jquery...

// lodash shuffle array function
console.log(_.shuffle([1, 2, 3]));
