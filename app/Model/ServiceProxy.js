const puremvc = require("puremvc");
const ServiceResponse = require("./ServiceResponse");

const ServiceProxy = new puremvc.Proxy("serviceProxy");


data = ServiceResponse();

ServiceProxy.setData(data);

module.exports = ServiceProxy;