/*
 * File: gen-people.js
 * Project: api
 * Created: Wednesday, September 15th 2021, 4:21:30 pm
 * Last Modified: Thursday, August 10th 2023, 8:21:35 am
 * Copyright © 2021 AMDE Agência
 */

const faker = require('faker');

let db = {categories: []};
const qtty = 5;

for (let index = 1; index <= qtty; index++) {
    const name = faker.commerce.department();

    db.categories.push({
        guid: faker.datatype.uuid(),
        name,
        image: `https://source.unsplash.com/155x290/?${name}`,
        cover: `https://source.unsplash.com/700x385/?${name}`,
        description: faker.commerce.productDescription(),
    });
}

console.log(JSON.stringify(db));
