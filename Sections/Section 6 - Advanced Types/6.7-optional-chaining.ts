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

// optional chaining demo
const fetchUserData = {
    id: 'u1',
    name: 'Jacob',
    job: { title: 'CEO', desription: 'My own company' }
};

// console.log(fetchUserData.job && fetchUserData.job.title); // JS way, 

// optional chaining using optional operator, which checks if there is object fetchUserData, if not null then access it, 
// then checks if there is job field, and if not null then access it
console.log(fetchUserData?.job?.title);

// used for example in HTML data fetch, and you don't know if you get certain data/fields, 
// in this file, you can't test it properly, as TS already sees if it has data/field or not, 
// so it throws errors, even tho in HTML fetch data situation it would work fine