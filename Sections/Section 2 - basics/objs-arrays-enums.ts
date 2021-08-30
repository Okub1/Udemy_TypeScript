// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Jacob",
//     age: 23,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Jacob',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin'); // not checked, but basically Error
// person.role[1] = 10; // Error

// person.role = [0, 'admin', 'user']; // Error

let favoriteActivities: string[];
favoriteActivities =['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}