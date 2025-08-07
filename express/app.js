const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("My First Route in Express JS");
})

app.get("/about", (request, response) => {
    response.send("About us");
})

app.get("/contact", (request, response) => {
    response.send("Contact us");
})

app.listen(2000)
