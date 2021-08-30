// defining basic class

class Department {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    // this addes extra parameter safety, expecting object
    describe(this: Department) {
        console.log('Department: ' + this.name);
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
const accounting = new Department('Accounting');

console.log(accounting);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna'; // can access class field that are not private, but what if we want it to be private?, after setting it private we can no longer access it from the outside!

accounting.describe();
accounting.printEmployeeInformation();
