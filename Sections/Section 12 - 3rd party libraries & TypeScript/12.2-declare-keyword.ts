import _ from 'lodash';

console.log(_.shuffle([1, 2, 3]));


// when we want to use some kind of variable, that is
// declared somewhere else than .ts files, 
// we need to ensure in TS, that it will be there
// using keyword "declare" as a last resort
// example, we have global variable in html
// called GLOBAL, TS won't compile, as it
// is not declared in any of TS files, therefore
// we need to declare it first
declare var GLOBAL: any;

// after that we can use it without errors...
console.log(GLOBAL);