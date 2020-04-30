const puremvc = require("puremvc");
const ServiceResponse = require("./ServiceResponse");

const ServiceProxy = new puremvc.Proxy("serviceProxy");

ServiceProxy.convert = function (data) {
  ServiceProxy.setData(ServiceResponse(data));
}

module.exports = ServiceProxy;