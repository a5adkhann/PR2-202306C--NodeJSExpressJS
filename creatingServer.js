const http = require("http");

http.createServer((request, response) => {
    response.write("<h1>My First Server in Node JS</h1>");
    response.end();
}).listen(3000);