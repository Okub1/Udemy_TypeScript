// type AddFn = (a:number, b: number) => number;
interface AddFn { // interface as a function, just an alternative to custom type above...
    (a: number, b: number): number; // annonymous function inside interface
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 23;

    constructor(private n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Person;

user1 = new Person('Jacob');

user1.greet('Hi there, I am');
console.log(user1);