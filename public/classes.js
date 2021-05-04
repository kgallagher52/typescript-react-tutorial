"use strict";
class Robot {
    constructor(_name, _color) {
        this._name = _name;
        this._color = _color;
    }
    static isColorAvaliable(color) {
        return Robot.avaliableColors.includes(color);
    }
    ;
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    // Setter
    set name(value) {
        this._name = value;
    }
    set color(value) {
        if (!Robot.isColorAvaliable(value)) {
            throw new Error(`Color ${value} is not available.`);
        }
        this._color = value;
    }
    // Getter
    get name() {
        return this._name + '_suffix';
    }
}
// By default if we do not use modifiers then the attributes are public
Robot.avaliableColors = ['Blue', 'Green'];
class FlyingRobot extends Robot {
    constructor(name, jetPackSize, color) {
        super(name, color); // Refers to the constructor of the parent class
        this.jetPackSize = jetPackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot('Keaton', "red");
robot.askName();
const flyingRobot = new FlyingRobot("Chris", 12, "red");
flyingRobot.move(10);
flyingRobot.name = "tom";
console.log(`My name is ${flyingRobot.name}`);
