export interface IOrder {
    calculateTotal(): number; // method that returns number
}
// By adding this interface and implementing it across two classes if any changes happen it will need to be adjusted to all classes that implement this

export const calculateTotalAmount = (order: IOrder) => {
    let total = order.calculateTotal();

    const discount = total * .1;

    total -= discount;

    const tax = total * .2;

    total += tax;

    return total;
}