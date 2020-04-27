const puremvc = require("puremvc");
const service = require("../index");

function ServiceMediator(service) {
  puremvc.Mediator.call(this, this.constructor.NAME, service);
}

ServiceMediator.prototype = new puremvc.Mediator;
ServiceMediator.prototype.constructor = ServiceMediator;

ServiceMediator.prototype.onRegister = function () {
  const self = this;

  function IService() {
    this.service = self.service.bind(self);
  }

  this.viewComponent.setDelegate(new IService());
  this.viewComponent.createServer();
};

ServiceMediator.prototype.service = function (request, response, data) {
  const serviceRequest = new service.model.request.ServiceRequest(request, response, data);
  this.facade.sendNotification(service.ApplicationFacade.SERVICE, serviceRequest);
};

ServiceMediator.prototype.listNotificationInterests = function () {
  return [
    service.ApplicationFacade.SERVICE_RESULT,
    service.ApplicationFacade.SERVICE_FAULT
  ];
};

ServiceMediator.prototype.handleNotification = function (notification) {
  const serviceRequest = notification.body;
  if (notification.getName() === service.ApplicationFacade.SERVICE_RESULT) {
    this.viewComponent.result(serviceRequest.response, serviceRequest.resultData);
  }
};

module.exports = ServiceMediator;