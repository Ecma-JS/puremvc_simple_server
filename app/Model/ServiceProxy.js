const puremvc = require("puremvc");

const ServiceProxy = new puremvc.Proxy("serviceProxy");


ServiceProxy.getData();
ServiceProxy.setData()

module.exports = ServiceProxy;