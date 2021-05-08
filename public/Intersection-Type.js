"use strict";
// Difference between Union types and Intersection Types is unions allow you to use multiple types
// where Intersection types merge all the multiple types into one.'
function X(obj) {
    return obj.a + obj.b + obj.c;
}
function combine(objA, objB) {
    return { ...objA, ...objB };
}
const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
