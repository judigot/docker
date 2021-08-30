const http = require("http");

http
  .createServer(function (request, response) {
    response.write("Hello, World!");
    response.end();
  })
  .listen(3000, function () {
    console.log("Server has started at port 3000");
  });
