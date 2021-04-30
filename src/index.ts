import multiply, { multiplyByTwo } from "./multiply"

// export default - that is why we have multiply 
// export - is why we have { multiplyByTwo }
// You can also do import * as multiply from "./multiply" - this will let you bring everything in as object
// When doing * you can do multiply.default to grab the export default 

const a = 2;
const b = 4;

console.log(multiply(a, b))