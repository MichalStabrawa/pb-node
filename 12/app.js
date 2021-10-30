const fs = require("fs");
const process = require("process");

let argv = process.argv;
const testFolder = argv[2];

if (argv.length == 3) {
  console.log(`Pliki w folderze ${argv[2]} to`);
  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);
  });
} else if (argv.length > 3) {
  console.log(`Za duzo parametrów`);
} else if (argv.length < 3) {
  console.log(`Za mało parametrów`);
}
