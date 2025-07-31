const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type' : 'application/json' });
    response.write(JSON.stringify(
        [
        {name: "Ali", age: 22},
        {name: "Hassan", age: 22}
        ]
    ));
    response.end();
}).listen(2000);