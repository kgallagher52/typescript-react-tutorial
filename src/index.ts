import { calculateTotalAmount } from './lib/calculate-total-amount';
import { Order } from './lib/order';
import { ShoppingCart } from './lib/shopping-cart'


const cart = new ShoppingCart();
console.log(`The Cart's total is ${calculateTotalAmount(cart)}`)
const order = new Order();
console.log(`The Order's total is ${calculateTotalAmount(order)}`)

// https://www.udemy.com/course/react-with-typescript/learn/lecture/14461180#overviewr