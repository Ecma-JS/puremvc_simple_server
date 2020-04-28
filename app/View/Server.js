class Server {
  constructor() {
    this.server = null
  }

  createServer(res) {
    this.server = require("http").createServer(function (request, response) {
      console.log('Hello, NodeJS server');
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
      response.end(res)
    }).listen(5000, function (error) {
      console.log(error ? error : "Server running at PORT:" + (5000));
    });
  }
}

module.exports = Server;