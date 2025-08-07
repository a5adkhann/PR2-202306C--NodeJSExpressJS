const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Home Page");
})

app.get("/about", (request, response) => {

    const name = request.query.name;
    if(name){
        response.send(`About ${name}`)
    }
    else {
        response.send("About Page");
    }
})

app.get("/service/:name/:id", (request, response) => {
    const name = request.params.name;
    const id = request.params.id;

    if(name && id){
        response.send(`My name is ${name} & id is ${id}`);
    }
})

app.listen(3000, () => {
    console.log("Server Started");
});