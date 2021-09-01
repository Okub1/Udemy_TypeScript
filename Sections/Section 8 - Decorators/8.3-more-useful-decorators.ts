function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

// function WithTemplate(template: string, hookId: string) {
//     // "_" name specifies to TypeScript, that you know you don't use it, 
//     // but you have to specify it, so with "_" name, you ignore that error
//     return function (_: Function) {   
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//             hookEl.innerHTML = template;
//         }
//     }
// }

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {   
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Jacob';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);