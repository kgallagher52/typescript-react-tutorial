"use strict";
// Boolean  - false || true
const b = false;
// Number - Supports: Decimal, Binary, Octal, Hexidecimal
let num = 1 + 0b1 + 0o1 + 0x1;
// String - Supports: Single Quotes, Double Quotes, and Template Strings
const hello = 'Hello';
const world = "World";
const helloWorld = `${hello} ${world}`;
// Null & Undefined 
let n = null;
let u = undefined;
// Union - Define multiple types
let primativeTypes;
// Object - This is not a primative type
const myObj = new Map();
// Void - function infer void if nothing is returned
const voidFunc = (str) => {
    console.log(str);
};
// Array 
let arr1 = ["x", "y"];
// Array - Generic array
let arr2 = arr1;
// Tuple - has a fixed number of items and it has to be the same type in the same order
let tuple = ["str", 1];
// Enum - Enum assigns a number to each item so Red 0, Yellow 1, Green 2
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let myFavoriteColor = Color.Red;
// You can also assign numbers manually to each value so red 12, yellow 22, green 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 12] = "Red";
    Color2[Color2["Yellow"] = 22] = "Yellow";
    Color2[Color2["Green"] = 1] = "Green";
})(Color2 || (Color2 = {}));
// Lookup Color2[12] = Red
// You can also use strings as values Red red, Yellow yellow, Green green
var Color3;
(function (Color3) {
    Color3["Red"] = "red";
    Color3["Yellow"] = "yellow";
    Color3["Green"] = "green";
})(Color3 || (Color3 = {}));
// * You can't look these up like numbers though
// Lookup Color3[red] = undefined
// Any
let ANY;
ANY = 1;
ANY = false;
ANY = "Can be anything";
// Type Assertions
const email = document.getElementById("email");
if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget;
        // You would not be able to grab value unless you did the as and told the dom that it was an input
        console.log(input.value);
    });
}
