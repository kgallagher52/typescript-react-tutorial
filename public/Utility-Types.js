"use strict";
// https://www.udemy.com/course/react-with-typescript/learn/lecture/19163308#overview
// Create function that allows this to be updated
const updateStarship = (id, starship) => { };
updateStarship(1, {
    name: 'Explorer',
});
/* Required<T> */
// This Makes optional types such as x?: number and makes them all required
/* Readonly<T> */
// Makes all properties readonly 
/* Record<K, T> */
const aRecord = {
    apples: 10,
    oranges: 20
};
const startships = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false
    }
};
let JohnsDrink;
JohnsDrink = 'Coffee';
let JanesDrink;
let JanesDrink2;
function paintStarship(id, color) {
    return { id, color };
}
/* InstanceType<T> */ // ~~ Still don't fully grasp
class Car {
    constructor(name) {
        this.name = name;
    }
    drive() { }
    static buildCar() {
        // Instantiate a car with some feature
    }
}
const myObject = {
    sayHello() {
        return this.helloWorld();
    }
};
/* <T> */ 
