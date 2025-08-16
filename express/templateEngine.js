const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/welcome", (req, res) => {
    const info = {
        name : "Ahmed"
    }
    res.render("main", {info});
})

app.get("/about", (req, res) => {

    const teams = ["Pakistan", "India", "Australia"];

    res.render("about", {teams});
})

app.listen(2000, () => {
    console.log("Server started");
})