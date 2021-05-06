// Generic Functions

function genericFunction<T>(x: T): T {
    return x
}

const genericArrowFunctions = <T>(x: T): T => x

// Generic Interfaces

interface GenericInterface<T> {
    (a: T): T;
    someProp: T;
}

interface GenericInterface<T> {
    <U>(a: U): U;
    someProp: T;
}

// Generic Classes
class GenericClass<P> { // * Static members cannot reference class type parameters only instances
    constructor(public props: P) { }

    getProps(): P {
        return this.props;
    }
    // Can't do this below with static
    // static A:P;
    // static someMEthod(p:P) {

    // }
}

interface Expirable {
    expiryDate: Date
}

interface ChocolateCake extends Expirable { }
interface VanillaCake extends Expirable { }

const chocoCakes: ChocolateCake[] = [
    { expiryDate: new Date() }
]
const vanillaCakes: VanillaCake[] = [
    { expiryDate: new Date() }
]

// Describing generics with interface
interface getExpiredItemsFunction {
    <Item extends Expirable>(items: Array<Item>): Array<Item>;
}

const getExpiredItems: getExpiredItemsFunction = (items) => {
    const currentDate = new Date().getTime();
    return items.filter(i => i.expiryDate.getDate() < currentDate);
}

const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);