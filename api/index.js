/*
 * File: index.js
 * Project: api
 * Created: Wednesday, September 15th 2021, 4:21:30 pm
 * Last Modified: Wednesday, September 15th 2021, 7:07:48 pm
 * Copyright © 2021 AMDE Agência
 */

const faker = require('faker');

let db = {products: []};
const qtty = 15;

for (let index = 1; index <= qtty; index++) {
    let name = faker.commerce.product();
    db.products.push({
        id: index,
        name,
        category: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: `https://source.unsplash.com/720x480/?${name}`,
    });
}

console.log(JSON.stringify(db));
