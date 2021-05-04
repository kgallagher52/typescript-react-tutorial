"use strict";
// Functions (optional and default parameters)
// You can make thinks optional on function parameter by doing (a: number, b?: number)
// You can also define a default value but can't make it optional and have default (a: number, b: number = 23)
const sum = (a, b) => {
    return a + b;
};
// Now we can assign a function that has to follow this structure
const sum2 = (a, b) => a + b;
// Having an unknown number of arguments
const sumEverything = (...numbers) => {
    return numbers.reduce((result, num) => result + num, 0);
};
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] + args[1];
    }
    return Math.pow(args[0], 2);
}
