const express = require("express");
const app = express();

app.get("/about", (req, res) => {
    res.send("<h2>Rendering HTML Format</h2>");
})

app.get("/service", (req, res) => {
    res.send([
        {id: 1, name: "Ali", email: "ali@gmail.com"},
        {id: 2, name: "Ahmed", email: "ahmed@gmail.com"},
        {id: 3, name: "Hassan", email: "hassan@gmail.com"}
    ]);
})

app.listen(2000, () => {
    console.log("Server Started");
})