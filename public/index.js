"use strict";
// Generic Functions
function genericFunction(x) {
    return x;
}
const genericArrowFunctions = (x) => x;
// Generic Classes
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCakes = [
    { expiryDate: new Date() }
];
const vanillaCakes = [
    { expiryDate: new Date() }
];
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter(i => i.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);
