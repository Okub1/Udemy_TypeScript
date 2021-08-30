interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

// created object of type interface, has to satisfy all fields of interface...
user1 = {
    name: 'Jacob',
    age: 23,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there, I am');