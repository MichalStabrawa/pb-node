const os = require("os");
const fs = require("fs");

const example = require("./multiple");

let nameUsers = os.userInfo();
console.log(nameUsers.username);

let readA = fs.readFileSync("./a.txt").toString();
console.log(`readA to : ${parseInt(readA)}`);

let readB = fs.readFileSync("./b.txt").toString();

console.log(example.add(parseInt(readA), parseInt(readB)));

fs.writeFileSync("wynik.txt", nameUsers.username);
