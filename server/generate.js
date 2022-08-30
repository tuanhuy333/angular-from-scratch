
import { commerce, lorem, random } from 'faker';

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: commerce.productName(),
    description: lorem.sentences(),
    price: commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: random.number()
  });
}

console.log(JSON.stringify(database));
