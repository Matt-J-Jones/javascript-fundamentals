const Candy = require('./candy');

class ShoppingBasket {

  constructor() {
    this.list = [];
    this.total = 0.00;
  }
  
  addItem(candy) {
    this.list.push(candy.getName())
    this.total += candy.getPrice()
  }

  getTotalPrice() {
    return this.total;
  }

  getList() {
    return this.list;
  }
}

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());
const candy = new Candy('Mars', 4.99);
basket.addItem(candy);
console.log(basket.getList());
console.log(basket.getTotalPrice());
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice());


module.exports = ShoppingBasket;