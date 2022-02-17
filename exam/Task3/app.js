const fs = require("fs");
const path = require("path");

const getDataFile = (name) => {
    try {
        const data = fs.statSync(name);
        return data;
    } catch (err) {
        console.error("TO jest błąd", err);
    }
};

const readDataFile = () => {
    const fileName = path.basename(__filename);
    console.log(`Filname: ${fileName}`);
    let fileData = getDataFile(fileName);
    console.log(`File size: ${fileData.size}`);
    console.log(`File create: ${fileData.birthtime}`);
    console.log(`File modify: ${fileData.mtime}`);
    console.log(fileData);
};

readDataFile();
