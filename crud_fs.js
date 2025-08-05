const path = require("path");
const fs = require("fs");

const crudPath = path.join(__dirname, "crud");
const filePath = `${crudPath}/crud.txt`;

// console.log(crudPath);


// create
// fs.writeFileSync(`${crudPath}/crud.txt`, "Create Read Update Delete");


// read
// fs.readFile(`${crudPath}/crud.txt`, "utf-8", (err, data) => {
//     // console.log(data.toString());
//     console.log(data);
// })


// update
// fs.appendFile(filePath, " in Node JS", (err) => {
//     if(!err){
//         console.log("Updated successfully");
//     }
// })


// delete
fs.unlinkSync(filePath);
