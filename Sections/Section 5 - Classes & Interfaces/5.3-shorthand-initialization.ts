// defining basic class

class Department {
    // private id: string; // after shorthand init. we can get rid of this 
    // private name: string;
    private employees: string[] = [];

    // > shorthand initiallization provides us to declare & init. class fields inside constructor parameters using access modifiers before name
    constructor(private id: string, public name: string) {
        // this.id = id; // after shorthand init. we can get rid of this 
        // this.name = n;
    }

    // this addes extra parameter safety, expecting object
    describe(this: Department) {
        console.log('Department (' + this.id + '): ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


// declaration and initialization of classes
const accounting = new Department('d1', 'Accounting');

console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; // can access class field that are not private, but what if we want it to be private?, after setting it private we can no longer access it from the outside!

accounting.describe();
accounting.printEmployeeInformation();
