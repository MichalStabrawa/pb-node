//7
const os = require("os");
const fs = require("fs");

let nameUsers = os.userInfo(); //get user
let getUserName = `Uzytkownik ${nameUsers.username}`;

fs.writeFileSync("wynik.txt", getUserName + "\n");
