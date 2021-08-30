class Department {
    // declaring static field
    static fiscalYear = 2020;
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    // also constructor cannot be static
    constructor(private readonly id: string, public name: string) {
        // this.id = id; 
        // this.name = n;
    }

    // declaring static method (function)
    static createEmployee(name: string) {
        return { name: name };
    }

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

class ITDepartment extends Department {

    constructor(id: string, public admins: string[]) {
        super(id, 'IT Department');

    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }

        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    // overriding
    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

// invoking static methods and accessing static field
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// calling functions from static context
// Math.pow();

// declaration and initialization of classes
const it = new ITDepartment('d1', ['Jacob']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);


const accounting = new AccountingDepartment('d2', []);


accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Manu');

accounting.printReports();

console.log(accounting);