import { IOrder } from './calculate-total-amount'

// These components do not know anything about eachother only knows about the IOorder but tied together

export class ShoppingCart implements IOrder {
    calculateTotal() {
        return 100;
    }
}