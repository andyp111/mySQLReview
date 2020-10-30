const db = require('./index');

const seed = [
  {
    name: 'Burgers',
    price: 2,
    rating: 8
  },
  {
    name:'Tacos',
    price: 1,
    rating: 9
  },
  {
    name: 'Kbbq',
    price: 10,
    rating: 9
  },
  {
    name: 'Shabu',
    price: 10,
    rating: 8.5
  },
  {
    name: 'Pho',
    price: 5,
    rating: 10
  }
];

const seedMe = () => {
  seed.forEach((food, index) => {
    db.query(`INSERT INTO Food (name, price, rating) VALUES ("${food.name}", ${food.price}, ${food.rating});`, (error, result) => {
      if (error) {
        console.log('error in inserting values');
      } else {
        console.log('seed success');
      }
    });
  });
  db.end();
}

seedMe();