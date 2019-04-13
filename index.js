//lab1

// console.log(process.argv);

const operations = require("./allOperations");
// const params = process.argv.slice(2)
// console.log(params)
// const currentOperationIndex = params.findIndex(item=>item.startsWith('--'))
// const [curreOperation] = params.splice(currentOperationIndex,1).map(e=>e.substring(2))
// console.log(curreOperation)
// const operands = params.map(e=>Number(e))
// let func = operations[curreOperation]
// console.log(func)
// console.log(func(...operands))
//-----------------------------------------------------------------------------------------
//lab2
//---------

const params = require("yargs").array(["add", "mult", "div", "rem"]).argv;
const supportedOperations = ["add", "mult", "div", "rem"];
// console.log(params);
// console.log(params.div);
// let operation;
let numbers;
// [operation, numbers] = params;
// console.log(operation);
// console.log(numbers);

let selectedOperations = supportedOperations.filter(
  operation => params[operation]
);
console.log(selectedOperations);
[operation] = selectedOperations;
let func = operations[operation];

if (operation === "add") {
  operation = selectedOperations;
  numbers = params.add;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
if (operation === "div") {
  operation = selectedOperations;
  numbers = params.div;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}

if (operation === "sub") {
  operation = selectedOperations;
  numbers = params.sub;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
if (operation === "mult") {
  operation = selectedOperations;
  numbers = params.mult;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
if (operation === "rem") {
  operation = selectedOperations;
  numbers = params.rem;
  console.log("oper is: " + operation);
  console.log("num is: " + numbers);
  console.log(func(...numbers));
}
