class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = []; // now with protected access modifier, inherited classess can also access this field

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
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    // overriding
    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }

        // this.employees.push(name); // error, private modifier in parent doesn't allow us to access it! To get access, there needs to be "protected" access modifier!
        this.employees.push(name); // with protected it works fine :))
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

// accounting.addEmployee('Max'); // won't be added, as we changed workings of addEmployee to not add 'Max'
accounting.addEmployee('Manu'); // works fine :))

accounting.printReports();

console.log(accounting);