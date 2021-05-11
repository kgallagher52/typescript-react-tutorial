type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null

function someFunction<T>(value: T) {
    const someOtherFunction = (someArG: T extends boolean ? 'TYPE A' : 'Type B') => {

    }
    return someFunction
}
const result = someFunction(''); // So it will automatically assign the correct type