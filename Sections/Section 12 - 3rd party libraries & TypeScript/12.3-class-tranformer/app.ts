import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from "./product.model"

const products = [
    { title: "A carpet", price: 29.99 }, 
    { title: "A book", price: 10.99 }
];

// to skip these two steps, of mapping objects, 
// we can get class-tranformer, which 
// creates objects from plain objects above...
// to install class-tranformer library
// use: npm install class-transformer --save
// and npm install reflect-metadata --save
// also you need to import reflect-metadata

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
