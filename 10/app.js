const os = require("os");
const fs = require("fs");
const process = require("process");
const math = require("../math");

let argv = process.argv;

const checkA = argv[2] == "a.txt" ? true : false;
const checkB = argv[3] == "b.txt" ? true : false;

if (checkA && checkB && argv.length == 4) {
  let readA = fs.readFileSync(`./${argv[2]}`).toString(); //get a value with a.txt
  let readB = fs.readFileSync(`./${argv[3]}`).toString();

  let addVariables = `Wynik ${readA} + ${readB} = ${math.add(
    parseInt(readA),
    parseInt(readB)
  )}`;
  let oddVariables = `Wynik ${readA} - ${readB} = ${math.odd(
    parseInt(readA),
    parseInt(readB)
  )}`;
  let multipleVariables = `Wynik ${readA} * ${readB} = ${math.multi(
    parseInt(readA),
    parseInt(readB)
  )}`;
  let divideVariables = `Wynik ${readA} / ${readB} = ${math.divide(
    parseInt(readA),
    parseInt(readB)
  )}`;

  console.log(addVariables);
  console.log(oddVariables);
  console.log(multipleVariables);
  console.log(divideVariables);
} else if (argv.length < 4) {
  console.log("Za malo parametrów");
} else if (argv.length > 4) {
  console.log("Za duzo parametrów");
} else {
  console.log("Złe parametry");
}
