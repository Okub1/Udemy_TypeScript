let userInput: unknown; // simillar to any, but more restrictive, accepts everything, do not use that much
let userName: string;

userInput = 5;
userInput = 'Jacob';

// userName = userInput; // Error, type unknown is not guaranteed to be string
// needed extra typecheck with unknown type, therefore better option compared to any
if (typeof userInput === 'string') {
    userName = userInput;
}

// never returns anything, it crashes/breaks  script before it could return anything
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (true) {} // also never returns
}

generateError('An error occured!', 500);