"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() { }
}
const initializeAnimal = (Animal, name) => {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
};
const cat = initializeAnimal(Cat, 'Tom');
console.log(cat);
const dog = initializeAnimal(Dog, 'Jessup');
console.log(dog);
dog.bark(); // This only works now because we added generic to the AnimalConstructor to and made it so it extends the Animal interface so it can be assigned to class
/*
    Class - Two sides:
        Instance
            name:string
            setName(name:string){}

            Can be accessed when a new instance has been made
                const catInstance = new Cat()
                catInstance.setName('Felix')
        Static
            static someProp = 1
            static someMethod() {}

            Can be accessed on the class itself
                console.log(Cat.someProp)
                Cat.someMethod()

*/
// https://www.udemy.com/course/react-with-typescript/learn/lecture/14461182#overview
