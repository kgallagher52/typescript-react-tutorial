interface Animal {
    name: string;
    group: string | undefined;
    setGroup(group: string): void;
}

class Cat implements Animal {
    name: string;
    group: string | undefined;

    constructor(name: string) {
        this.name = name;
    }

    setGroup(group: string) {
        this.group = group;
    }
}
class Dog implements Animal {
    name: string;
    group: string | undefined;

    constructor(name: string) {
        this.name = name;
    }
    setGroup(group: string) {
        this.group = group;
    }
    bark() { }
}

interface AnimalConstructor<T> {
    new(name: string): T;
}

const initializeAnimal = <T extends Animal>(Animal: AnimalConstructor<T>, name: string) => {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal
}


const cat = initializeAnimal(Cat, 'Tom');
console.log(cat)
const dog = initializeAnimal(Dog, 'Jessup');
console.log(dog)
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