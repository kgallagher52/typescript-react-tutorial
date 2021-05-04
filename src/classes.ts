class Robot {
    // By default if we do not use modifiers then the attributes are public
    static avaliableColors = ['Blue', 'Green'];
    static isColorAvaliable(color: string) {

        return Robot.avaliableColors.includes(color)
    }

    constructor(protected _name: string, public _color: string) { };
    askName() {
        console.log(`My name is ${this.name}`)
    }
    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`)
    }
    // Setter
    set name(value: string) {
        this._name = value;
    }
    set color(value: string) {
        if (!Robot.isColorAvaliable(value)) {
            throw new Error(`Color ${value} is not available.`)
        }
        this._color = value
    }
    // Getter
    get name() {
        return this._name + '_suffix'
    }
}


class FlyingRobot extends Robot {
    jetPackSize: number;
    constructor(name: string, jetPackSize: number, color: string) {
        super(name, color); // Refers to the constructor of the parent class
        this.jetPackSize = jetPackSize
    }

    move(distance: number) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}

const robot = new Robot('Keaton', "red");
robot.askName();

const flyingRobot = new FlyingRobot("Chris", 12, "red");
flyingRobot.move(10);

flyingRobot.name = "tom"
console.log(`My name is ${flyingRobot.name}`)