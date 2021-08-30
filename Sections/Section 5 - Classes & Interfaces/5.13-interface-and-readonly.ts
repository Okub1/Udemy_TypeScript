interface Greetable {
    readonly name: string; // addition of readonly

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string; // adding readonly is not needed here as it implements it from interface
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