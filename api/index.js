const faker = require("faker");

let db = { people: [] };
const qtty = 12;

for (let index = 0; index <= qtty; index++) {
    db.people.push({
        id: index,
        name: faker.name.findName(),
        email: faker.internet.email(),
        about: faker.lorem.paragraph(),
        phone: faker.phone.phoneNumber(),
        job: faker.name.jobTitle(),
        image: `https://api.hello-avatar.com/adorables/${faker.internet.email()}`,
        country: faker.address.country()
    });
}