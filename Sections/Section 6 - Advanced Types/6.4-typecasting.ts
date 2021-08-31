type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Jacob',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

type UnknwonEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknwonEmployee) {
    console.log('Name: ' + emp.name);
    
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if ('startDate' in emp) { 
        console.log('Privileges: ' + emp.startDate); 
    }
}

printEmployeeInformation(e1);


class Car {
    drive() {
        console.log('Driving');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird'; 
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});


// typecasting demo
// const userInputElement = document.getElementById('user-input');

// userInputElement.value = 'Hi there!'; // error, as HTMLElement does not have value field, we need to typecast!

// >>>>> two ways of typecast <Type> element, 

// warning, similar syntax using <> is in React, that is not used same!:
// const userInputElement = <HTMLInputElement> document.getElementById('user-input'); // <<<<< first
// const userInputElement = <HTMLInputElement> document.getElementById('user-input')! as HTMLInputElement; // <<<< second

// userInputElement.value = 'Hi there!'; // this will now work!

// also, using ! can be alternatively written as:
// it just tells compiler, that we guarantee that object will not be null, but after removal,
// we need to check for null, and AFTER that we can typecast...
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}