function somefn(myArg: number | string) {
    if (typeof myArg === 'string') {
        let x = myArg.toUpperCase();

    } else if (typeof myArg === 'number') {
        myArg.toFixed();
    } else {

    }
}


interface Dog {
    bark(): void;
    walk(): void;
}
interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        (<Dog>pet).bark();
    } else {
        (<Cat>pet).meow();

    }
}