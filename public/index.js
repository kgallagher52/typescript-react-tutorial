"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_total_amount_1 = require("./lib/calculate-total-amount");
const order_1 = require("./lib/order");
const shopping_cart_1 = require("./lib/shopping-cart");
const cart = new shopping_cart_1.ShoppingCart();
console.log(`The Cart's total is ${calculate_total_amount_1.calculateTotalAmount(cart)}`);
const order = new order_1.Order();
console.log(`The Order's total is ${calculate_total_amount_1.calculateTotalAmount(order)}`);
// https://www.udemy.com/course/react-with-typescript/learn/lecture/14461180#overviewr
