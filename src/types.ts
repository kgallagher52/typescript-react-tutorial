// Boolean  - false || true
const b: boolean = false;

// Number - Supports: Decimal, Binary, Octal, Hexidecimal
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String - Supports: Single Quotes, Double Quotes, and Template Strings
const hello: string = 'Hello';
const world: string = "World";
const helloWorld = `${hello} ${world}`;


// Null & Undefined 
let n: null = null;
let u: undefined = undefined;

// Union - Define multiple types
let primativeTypes: boolean | number | string | symbol | null | undefined;

// Object - This is not a primative type
const myObj: object = new Map();

// Void - function infer void if nothing is returned
const voidFunc = (str: string): void => {
    console.log(str)
}

// Array 
let arr1: string[] = ["x", "y"];
// Array - Generic array
let arr2: Array<string> = arr1;

// Tuple - has a fixed number of items and it has to be the same type in the same order
let tuple: [string, number] = ["str", 1];

// Enum - Enum assigns a number to each item so Red 0, Yellow 1, Green 2
enum Color {
    Red,
    Yellow,
    Green
}

let myFavoriteColor: Color = Color.Red;

// You can also assign numbers manually to each value so red 12, yellow 22, green 1
enum Color2 {
    Red = 12,
    Yellow = 22,
    Green = 1
}
// Lookup Color2[12] = Red

// You can also use strings as values Red red, Yellow yellow, Green green
enum Color3 {
    Red = "red",
    Yellow = "yellow",
    Green = "green"
}
// * You can't look these up like numbers though
// Lookup Color3[red] = undefined


// Any
let ANY: any;
ANY = 1;
ANY = false;
ANY = "Can be anything"

// Type Assertions

const email = document.getElementById("email");

if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget as HTMLInputElement;
        // You would not be able to grab value unless you did the as and told the dom that it was an input
        console.log(input.value);
    })
}


