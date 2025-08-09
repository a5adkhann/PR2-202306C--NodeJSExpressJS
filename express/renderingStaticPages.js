const express = require("express");
const path = require("path");
const app = express();

const public = path.join(__dirname, "public");

app.use(express.static(public));

app.get("/", (req, res) => {
    res.sendFile(`${public}/index.html`)
})

app.get("/about", (req, res) => {
    res.sendFile(`${public}/about.html`)
})

app.get("/service", (req, res) => {
    res.sendFile(`${public}/service.html`)
})

app.listen(3000, () => {
    console.log("Server Started");
})