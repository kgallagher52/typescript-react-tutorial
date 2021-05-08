// This is used when you have downloaded a package and it has pre-created or in external packages and you can't edit them directly so you do declaration merging
// https://www.udemy.com/course/react-with-typescript/learn/lecture/14461190#overview
///////// Say this was in another module
interface Cart {
    calculateTotal(): number;
}
////////

interface Cart {
    x: number;
}

interface Cart {
    calculateTotal(options: { discountCode: number }): number;
}

// So this myCart will implement all of these options

let myCart: Cart = {
    x: 1,
    calculateTotal(options?: { discountCode: number }) {
        if (options && options.discountCode) {
            // Apply discount
        }
        return 1
    }
}


/* NAMESPACES */

////
namespace MyNamespace {
    export const x: number = 10;
    export interface SomeInterface {
        y: number;
    }
}
////

namespace MyNamespace {
    export const getX = () => x;
    export interface SomeInterface {
        x: number;
    }
}
MyNamespace.x;
MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface = {
    x: 1,
    y: 2
}

/* ADDING ONTO REACT COMPONENT MODULE */
import React from 'react';

declare module 'react' {
    interface Component {
        helloWorld(): string
    }
}

React.Component.prototype.helloWorld = function () {
    return 'Hello World!';
}

class MyComponent extends React.Component {
    render() {
        return <div>{this.helloWorld()}</div>
    }
}