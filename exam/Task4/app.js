const fs = require("fs");
const path = require("path");

const getUser = require("./api");

const datajson = path.basename("./data.json");
const dataPath = path.basename(datajson);

console.log("Dir", __dirname);

function getFileData() {
    try {
        const data = fs.readFileSync(dataPath, { encoding: "utf8", flag: "r" });
        return data;
    } catch (error) {
        console.log(`Error read file ${error}`);
    }
}

const dataNumberAndFilname = getFileData();
const obj = JSON.parse(dataNumberAndFilname);
console.log(obj.number);

const data = getUser(obj.number).then((res) => {
    return res.data;
});

console.log(data);

function saveFileData(fileName, data) {
    if (data) {
        fs.writeFileSync(fileName, data);
    }
}
async function saveFile(data) {
    try {
        const response = await data;
        return data;
    } catch (error) {
        console.error("Wywala sie na zapisie", error);
    }
}
saveFile(data).then((res) =>
    fs.writeFileSync(obj.filename, JSON.stringify(res))
);
