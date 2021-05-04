"use strict";
class Robot2 {
    constructor(name) {
        this.#private = "ECMAScript modifier";
        this.otherPrivate = "Typescript modifier";
        this.#name = name;
    }
    // # in Private fields are unique to the class and can't be overwritten
    #name;
    #private;
    getName() {
        return this.#name;
    }
}
class AdvancedRobot extends Robot2 {
    constructor(name) {
        super(name); //Because we are extending class we will use super to call the parent constructor
        this.#name = `Advanced ${name}`;
    }
    #name;
    getAdvancedRobotName() {
        return this.#name;
    }
}
const robot2 = new AdvancedRobot('Keaton');
const robo = new Robot2('ss');
console.log('parent name', robot2.getName());
console.log('subclass name', robot2.getAdvancedRobotName());
console.log(robot2.private);
console.log(robot2.otherPrivate);
/*
    Private VS ECMASCRIPT #

    class Robot {
        private name = "jack"
    }

    compiled the modifier gets removed when taken to js meaning in js users can access the private fields
    #will not let you access it
    class Robot {
        name = "jack"
    }

*/
// https://www.udemy.com/course/react-with-typescript/learn/lecture/21930446?start=15#overview
