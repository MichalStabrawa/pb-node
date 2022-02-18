const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const obj = { name: "" };
readline.question(`Your login github?`, (name) => {
    obj.name = name;

    readline.close();
});

console.log(obj.name);
