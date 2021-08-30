abstract class Department {
    static fiscalYear = 2020;
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id; 
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    // declaring abstract method, that HAS to be overriden by inherited classes
    // also class has to be abstract as well to contain abstract methods
    // also does not have body, and HAS to have return type
    abstract describe(this: Department): void;

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

    describe(): void {
        console.log('IT Department - ID: ' + this.id);
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

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
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

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// declaration and initialization of classes
const it = new ITDepartment('d1', ['Jacob']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);


const accounting = new AccountingDepartment('d2', []);

accounting.describe();

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Manu');

accounting.printReports();

console.log(accounting);