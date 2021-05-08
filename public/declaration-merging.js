"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// So this myCart will implement all of these options
let myCart = {
    x: 1,
    calculateTotal(options) {
        if (options && options.discountCode) {
            // Apply discount
        }
        return 1;
    }
};
/* NAMESPACES */
////
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
////
(function (MyNamespace) {
    MyNamespace.getX = () => MyNamespace.x;
})(MyNamespace || (MyNamespace = {}));
MyNamespace.x;
MyNamespace.getX();
const someInterface = {
    x: 1,
    y: 2
};
/* ADDING ONTO REACT COMPONENT MODULE */
const react_1 = __importDefault(require("react"));
react_1.default.Component.prototype.helloWorld = function () {
    return 'Hello World!';
};
class MyComponent extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", null, this.helloWorld());
    }
}
