let puremvc = require("puremvc");
let service = require("../index");

function ServiceCommand() {
  puremvc.SimpleCommand.call(this);
}

ServiceCommand.prototype = new puremvc.SimpleCommand;
ServiceCommand.prototype.constructor = ServiceCommand;

ServiceCommand.prototype.execute = function (notification) {
  let serviceProxy = this.facade.retrieveProxy(service.model.ServiceProxy.NAME);
  serviceProxy.response()
  .then(this.result.bind(this, serviceRequest), this.fault.bind(this, serviceRequest));
};

ServiceCommand.prototype.result = function (serviceRequest, data) {
  serviceRequest.setResultData(data.result);
  this.facade.sendNotification(service.ApplicationFacade.SERVICE_RESULT, serviceRequest);
};

module.exports = ServiceCommand;