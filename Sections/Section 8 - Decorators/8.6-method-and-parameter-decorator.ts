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

// ---

// decorator for class fields
// target: stands for prototype of object, or in static context stands for constructor function (JS)
// propertyName: name of the field (attribute/property) of class
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

// decorator for accessors (getter/setters)
// name: name of the accessor 
// descriptor: type built-in JS, to describe accessor/method
// more info on descriptors here. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor (setter/getter) decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// decorator for methods
// same three parameters (arguments) as accessor
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// decorator for parameters (of functions)
// name: name of the method
// position: position of parameter in function
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
            
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}