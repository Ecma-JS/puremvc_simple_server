function Service() {}

Service.prototype.createServer = function() {
    let self = this;

    require("http").createServer(function(request, response) {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
        response.end('Hello Node.js Server!');
    }).listen(5000, function(error){
        console.log(error ? error : "Server running at PORT:" + (5000));
    });
};

Service.prototype.setDelegate = function(delegate) {
    this.delegate = delegate;
};

Service.prototype.delegate;

module.exports = Service;