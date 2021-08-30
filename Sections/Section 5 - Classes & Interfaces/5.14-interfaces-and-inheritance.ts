interface Named {
    readonly name: string;
}

interface Greetable extends Named /*, AnotherInterface*/ { // inheritance with interfaces, also, you CAN merge multiple interfaces into one
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