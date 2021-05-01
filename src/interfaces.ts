interface A {
    someProp: number;
}
interface B {
    someProp: number;
}

let a: A = { someProp: 1 };
let c: B = a;

// Describing a user profile with interfaces


// Interfaces ? makes fields optional 

interface Profile {
    name: string;
    age?: number;

}

let profile: Profile = {
    name: "John",
    age: 21
};

// Index Signature
interface A {
    [key: string]: number;
}


