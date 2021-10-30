const user = require("./multiple");
const fs = require("fs");

let show = user.add(102, 2).toString();
console.log(show);

const odd = user.odd(100, 2);
console.log(odd);

fs.writeFileSync("./file.js", show);
