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

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('asd', 'asdasd');

const fetchUserData = {
    id: 'u1',
    name: 'Jacob',
    job: { title: 'CEO', desription: 'My own company' }
};

console.log(fetchUserData?.job?.title);



// nullish coalescing

const userInput = '';

// nullish coalescing operator, if userInput is nullish, and contain null, 
// then 'DEFAULT' is set, otherwise not, i.e. empty string will do fine,
//  but when using "||" operator, it acts as null, therefore "??" operator 
// is better for this situation if you want to keep empty string
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);