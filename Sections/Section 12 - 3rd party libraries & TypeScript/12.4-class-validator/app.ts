import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from "./product.model"

const products = [
    { title: "A carpet", price: 29.99 }, 
    { title: "A book", price: 10.99 }
];

// class validator is for 3rd party decorators
// to use class-validator, you need to use
// npm install class-validator --save

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}