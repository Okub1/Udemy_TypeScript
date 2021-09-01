function Logger(logString: string) {
    console.log('LOGGER FACTORY'); // just to prove order
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY'); // just to prove order
    return function (constructor: any) {   
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// using multiple decorators
// order of decorator functions is bottom up, first executes WithTemplate, then Logger decorator...
// however, decorator factoties, are in normal order, from up to bottom...
// it behaves like a stack (LIFO)...
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Jacob';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);