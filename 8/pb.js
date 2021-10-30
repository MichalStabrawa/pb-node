const os = require("os");
const fs = require("fs");

const math = require("./math");

//7
let nameUsers = os.userInfo(); //get user
let getUserName = `Uzytkownik ${nameUsers.username}`;

fs.writeFileSync("wynik.txt", getUserName + "\n");

//8

let readA = fs.readFileSync("./a.txt").toString(); //get a value with a.txt
let readB = fs.readFileSync("./b.txt").toString(); //get b value with b.txt
console.log(`readA to : ${parseInt(readA)}`);

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

fs.appendFileSync("wynik.txt", addVariables + "\n");
fs.appendFileSync("wynik.txt", oddVariables + "\n");
fs.appendFileSync("wynik.txt", divideVariables + "\n");
