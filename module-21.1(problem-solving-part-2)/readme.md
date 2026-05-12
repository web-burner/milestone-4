1. find out max number
2. find out max number from array
3. use add and multiplication to calculate wood 
4. find the cheapest phone from an array of object 
5. Calculate The Total Cost Of The Products In A Shopping Cart
const cart = [
  {
    productName: "Laptop",
    price: 1200,
    quantity: 2,
  },
  {
    productName: "Mouse",
    price: 25,
    quantity: 5,
  },
  {
    productName: "Keyboard",
    price: 75,
    quantity: 3,
  },
  {
    productName: "Monitor",
    price: 300,
    quantity: 2,
  },
  {
    productName: "Headphones",
    price: 150,
    quantity: 4,
  },
];

function totalCart(products) {
  //   console.log(products);
  let total = 0;
  for (let product of products) {
    const productTotal = product.price * product.quantity;
    total += productTotal;
  }
  return total;
}
console.log(totalCart(cart));

6. Multi-Layer Discount Price Calculation
7. simple Calculator To Call Function Inside A Function
8. Handle Unexpected Function Input Parameter Error