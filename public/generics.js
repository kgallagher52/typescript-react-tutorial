"use strict";
// Takes two generic type params
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
};
