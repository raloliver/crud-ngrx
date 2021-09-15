const faker = require('faker');

let db = {products: []};
const qtty = 30;

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
