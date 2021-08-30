// defining basic class

class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    // this addes extra parameter safety, expecting object
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}


// declaration and initialization of classes
const accounting = new Department('Accounting');

console.log(accounting);

// invoking object method
accounting.describe();


// this keyword with copied object, without name property, therefore yields Undefined in output...
// const accountingCopy = { describe: accounting.describe };

// accountingCopy.describe(); // error, without method parameter will produce Undefined name

// with "this: Department" parameter in describe, object of type Department must be fully described, otherwise cannot invoke methods with parameter "this: Class"
const accountingCopy = { name: 's', describe: accounting.describe };

accountingCopy.describe();
