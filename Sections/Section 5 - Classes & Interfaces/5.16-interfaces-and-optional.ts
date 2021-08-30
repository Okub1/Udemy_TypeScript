interface AddFn { // ALSO interfaces are not in pure JS, it is just pure typescript syntax used during compilation, not runtime!
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string; // optional fields using question mark, symbolizing it does not need to be implemented
    outputName?: string; 
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string; // optional, but cannot make them not optional, as it is marked as optional in interface!
    age = 23;

    constructor(private n?: string) { // if value n is not set or undefined
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Person;

user1 = new Person('Jacob');

user1.greet('Hi there, I am');
console.log(user1);