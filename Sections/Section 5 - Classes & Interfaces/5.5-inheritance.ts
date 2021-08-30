class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

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


// inheritance, you can inherit only from one class, cannot multiple
class ITDepartment extends Department {

    constructor(id: string, public admins: string[]) {
        super(id, 'IT Department'); // super keyword to call parent class (as in all other normal OOP langs lol)

    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
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

accounting.addReport('Something went wrong...');

accounting.printReports();

console.log(accounting);