class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id; 
        // this.name = n;
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

    // getter
    get mostRecentReport() {
        // custom logic
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');
    }

    // setter
    set mostRecentReport(value: string) {
        // custom logic
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


// declaration and initialization of classes
const it = new ITDepartment('d1', ['Jacob']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);


const accounting = new AccountingDepartment('d2', []);


// invoking setter, does not need parenthesis like methods! access it like a field
accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

// invoking getter, does not need parenthesis like methods!
console.log(accounting.mostRecentReport);

accounting.addEmployee('Manu');

accounting.printReports();

console.log(accounting);