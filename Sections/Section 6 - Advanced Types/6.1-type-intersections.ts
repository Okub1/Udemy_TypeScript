type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}


// combining two custom types - intersection, simillar to interfaces and their inheritance
// also, "&" in this case is called as intersection operator
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Jacob',
    privileges: ['create-server'],
    startDate: new Date()
};

// another example of intersection
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;