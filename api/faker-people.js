/*
 * File: gen-people.js
 * Project: api
 * Created: Wednesday, September 15th 2021, 4:21:30 pm
 * Last Modified: Thursday, August 10th 2023, 8:21:38 am
 * Copyright © 2021 AMDE Agência
 */

const faker = require('faker');

let db = {people: []};
const qtty = 12;

for (let index = 1; index <= qtty; index++) {
    db.people.push({
        guid: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        about: faker.lorem.paragraph(),
        phone: faker.phone.phoneNumber(),
        job: faker.name.jobTitle(),
        image: `https://api.hello-avatar.com/adorables/${faker.internet.email()}`,
        country: faker.address.country(),
    });
}

console.log(JSON.stringify(db));
