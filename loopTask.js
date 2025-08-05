const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files");
console.log(filePath);

for(let i = 1; i<=3; i++){
    fs.writeFileSync(`${filePath}/data${i}.txt`, `Data File${i}`);
}
