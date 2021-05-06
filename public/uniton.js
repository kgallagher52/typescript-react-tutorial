"use strict";
function somefn(myArg) {
    if (typeof myArg === 'string') {
        let x = myArg.toUpperCase();
    }
    else if (typeof myArg === 'number') {
        myArg.toFixed();
    }
    else {
    }
}
function isDog(someObj) {
    return someObj.bark !== undefined;
}
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
