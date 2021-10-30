//9

const process = require("process");

let argv = process.argv;
let text = "Hello World";

console.log(typeof argv);

if (argv.length <= 2) {
  console.log(text);
} else if (argv.length >= 3) {
  console.log(`${text} ${argv[2]}`);
}
