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

// typeguard demo
function add(a: Combinable, b: Combinable) {
    // return a + b; // would not work
    // typeguard using typeof, that allows us flexibility of union types:
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// union type of either of these two types
type UnknwonEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknwonEmployee) {
    console.log('Name: ' + emp.name);
    // console.log('Privileges ' + emp.privileges); // error: TS can't confirm is it that one employee, that has privilieges field
    // if (typeof emp === 'Employee') // error: typeguard will not work, as JS does not know type 'Employee', only Object

    if ('privileges' in emp) { // typeguard checking if 'privileges' field is in object
        console.log('Privileges: ' + emp.privileges); // this will now work!
        // console.log('Privileges: ' + emp.startDate); // error, this will not work!
    }

    if ('startDate' in emp) { // typeguard checking if 'startDate' field is in object
        console.log('Privileges: ' + emp.startDate); // this will now work!
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
    // vehicle.loadCargo(); // error, only truck has this, not car.

    // if ('loadCargo' in vehicle) { // this will work, but there are better ways
    //     vehicle.loadCargo(1000);
    // }

    // the ol' reliable instanceof operator like in any normal language lol
    // also instanceof operator is available in JS
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }

}

useVehicle(v1);
useVehicle(v2);
