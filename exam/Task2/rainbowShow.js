const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const colors = require("colors");
const argv = yargs(hideBin(process.argv)).argv;

startRainbow = () => {
    console.log(argv);
    if (argv._.length < 1) {
        console.log("No parameters!!!");
    } else if (argv._.length > 1) {
        console.log("You add to much parameters");
    } else {
        console.log(argv._[0].toString().rainbow);
    }
};

startRainbow();
//node RainbowShow.js "example"
