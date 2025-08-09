const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/welcome", (req, res) => {
    const info = {
        name : "Ahmed"
    }
    res.render("main", {info});
})

app.listen(2000, () => {
    console.log("Server started");
})