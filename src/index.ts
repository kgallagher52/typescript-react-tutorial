class Robot2 {
    // # in Private fields are unique to the class and can't be overwritten
    #name: string;
    #private: string = "ECMAScript modifier"
    private otherPrivate: string = "Typescript modifier"
    constructor(name: string) {
        this.#name = name;
    }

    getName() {
        return this.#name
    }
}

class AdvancedRobot extends Robot2 {
    #name: string;

    constructor(name: string) {
        super(name); //Because we are extending class we will use super to call the parent constructor
        this.#name = `Advanced ${name}`;
    }

    getAdvancedRobotName() {
        return this.#name
    }
}

const robot2 = new AdvancedRobot('Keaton');
const robo = new Robot2('ss')

console.log('parent name', robot2.getName());
console.log('subclass name', robot2.getAdvancedRobotName());
console.log(robot2.private)
console.log(robot2.otherPrivate)
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