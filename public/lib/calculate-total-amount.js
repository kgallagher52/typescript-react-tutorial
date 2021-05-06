"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalAmount = void 0;
// By adding this interface and implementing it across two classes if any changes happen it will need to be adjusted to all classes that implement this
exports.calculateTotalAmount = (order) => {
    let total = order.calculateTotal();
    const discount = total * .1;
    total -= discount;
    const tax = total * .2;
    total += tax;
    return total;
};
