let puremvc = require("puremvc");

function ServiceProxy() {
  puremvc.Proxy.call(this, this.constructor.NAME);
}

ServiceProxy.prototype = new puremvc.Proxy;
ServiceProxy.prototype.constructor = ServiceProxy;


ServiceProxy.prototype.response = function () {
  return new Promise(function (resolve, reject) {
    resolve('Hello Node.js Server!');
  });
};


ServiceProxy.NAME = "ServiceProxy";

module.exports = ServiceProxy;