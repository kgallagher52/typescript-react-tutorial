// https://www.udemy.com/course/react-with-typescript/learn/lecture/19163308#overview

/* Partial<T> */

interface Starship {
    name: string;
    enableHyperJump: boolean;
}
// Create function that allows this to be updated
const updateStarship = (id: number, starship: Partial<Starship>) => { };

updateStarship(1, {
    name: 'Explorer', // Usally it would require our second field but since we used the Partial we don't have to use second property
})

/* Required<T> */
// This Makes optional types such as x?: number and makes them all required

/* Readonly<T> */
// Makes all properties readonly 

/* Record<K, T> */
const aRecord: Record<string, number> = {
    apples: 10,
    oranges: 20
}
const startships: Record<string, Starship> = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false
    }
}

/* Pick<T,K> */

// interface A {
//     x: number;
//     y: number;
//     z: number;
// }
// // Now use pick
// Pick < A, "x" | "z" >= {
//     x: number;
//     z: number;
// }
// This only will grab the name property and create a new type with that
type StarshipNameOnly = Pick<Starship, 'name'>


/* Omit<T,K> */
// Opposite of Pick
type StarshipWithoutName = Omit<Starship, 'name'>


/* Exclude<T,U> */
// Takes away things we don't want on a union type
type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';

let JohnsDrink: AvailableDrinks;
JohnsDrink = 'Coffee'

type DrinksJaneDoesNotLike = 'Coffee' | 'Orange Juice';
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesNotLike>

/* Extract<T, K> */

type DrinksJaneLikes = "Tea" | "Lemonade" | "Mohito";
let JanesDrink2: Extract<AvailableDrinks, DrinksJaneLikes>

/* NonNullable<T> */
// Removes all undefined and nullable things
interface StarshipProps {
    color?: 'blue' | 'red' | 'green';
}

function paintStarship(id: number, color: NonNullable<StarshipProps['color']>) {
    return { id, color }
}

// paintStarship(1, undefined); // don't want to paint it undefined use NonNullable and it won't let it be that


/* ReturnType<T> */
// Now it will show on the return thats the {id:number, color: 'blue' | 'red' | 'green';}
type PaintStarshipReturn = ReturnType<typeof paintStarship>


/* InstanceType<T> */ // ~~ Still don't fully grasp

class Car {
    name: string;
    drive() { }


    constructor(name: string) {
        this.name = name;
    }

    static buildCar() {
        // Instantiate a car with some feature
    }
}
type CarInstanceType = InstanceType<typeof Car>;

/* ThisType<T> */ // ~~ Still don't fully grasp
interface MyObject {
    sayHello(): void;
}

interface MyObjectThis {
    helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld();
    }
}

myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World'
    }
})
console.log(myObject.sayHello());
