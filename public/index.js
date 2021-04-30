"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importDefault(require("./multiply"));
// export default - that is why we have multiply 
// export - is why we have { multiplyByTwo }
// You can also do import * as multiply from "./multiply" - this will let you bring everything in as object
// When doing * you can do multiply.default to grab the export default 
const a = 2;
const b = 4;
console.log(multiply_1.default(a, b));
